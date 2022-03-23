import { Router } from 'express';
import prisma from './../config/client';
import asyncWrapper from './../utils/asyncWrapper';

const router = Router();

router.get(
  '/products',
  asyncWrapper(async (req, res) => {
    const features = req.query.features ? req.query.features.split('|') : [];

    const getQueries = (req) => {
      const q = {};
      if (req.query.brands) {
        q.brand = { name: { in: req.query.brands.split('|') } };
      }
      if (req.query.colors || req.query.storage) {
        q.variants = { some: {} };
      }
      if (req.query.colors) {
        q.variants.some.color = { name: { in: req.query.colors.split('|') } };
      }
      if (req.query.storage) {
        q.variants.some.capacity = {
          capacity: { in: req.query.storage.split('|') },
        };
      }
      if (req.query.os) {
        q.os = { name: { in: req.query.os.split('|') } };
      }
      if (req.query.features) {
        q.features = { some: { name: { in: features } } };
      }
      return q;
    };

    const products = await prisma.product.findMany({
      where: getQueries(req),
      select: {
        id: true,
        slug: true,
        name: true,
        shortDescription: true,
        thumbnail: true,
        features: { select: { name: true } },
        variants: {
          select: {
            price: true,
            color: { select: { name: true } },
            capacity: { select: { capacity: true } },
          },
          orderBy: { price: 'asc' },
          take: 1,
        },
      },
    });

    const isFeature = (features, ft) => {
      let found = false;
      for (let i = 0; i < features.length; i++) {
        if (features[i].name === ft) {
          found = true;
        }
      }
      return found;
    };

    const result = products
      .filter((product) =>
        features.every((feature) => isFeature(product.features, feature))
      )
      .map((product) => {
        return {
          id: product.id,
          slug: product.slug,
          name: product.name,
          shortDescription: product.shortDescription,
          thumbnail: product.thumbnail,
          price: parseFloat(product.variants[0].price),
        };
      });

    res.json(result);
  })
);

router.get(
  '/products/:slug',
  asyncWrapper(async (req, res) => {
    const slug = req.params.slug;

    const product = await prisma.product.findUnique({
      where: { slug: slug },
      select: {
        id: true,
        name: true,
        shortDescription: true,
        features: { select: { id: true, name: true } },
        description: true,
        images: { select: { id: true, url: true } },
        variants: {
          select: {
            price: true,
            color: { select: { id: true, name: true } },
            capacity: { select: { id: true, capacity: true } },
          },
          orderBy: [
            { color: { name: 'asc' } },
            { capacity: { capacity: 'asc' } },
          ],
        },
      },
    });

    if (!product) {
      return res.status('400').json({
        error: 'Product not found',
      });
    }

    res.json({
      id: product.id,
      name: product.name,
      shortDescription: product.shortDescription,
      description: product.description,
      images: product.images,
      features: product.features,
      variants: product.variants.map((variant) => ({
        colorId: variant.color.id,
        color: variant.color.name,
        storageId: variant.capacity.id,
        capacity: variant.capacity.capacity,
        price: parseFloat(variant.price),
      })),
    });
  })
);

export default router;
