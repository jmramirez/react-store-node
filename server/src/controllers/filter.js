import { Router } from 'express';
import prisma from './../config/client';
import asyncWrapper from './../utils/asyncWrapper';

const router = Router();

router.get(
  '/filters',
  asyncWrapper(async (req, res) => {
    const brands = await prisma.brand.findMany({
      select: { id: true, name: true },
    });

    const capacity = await prisma.storage.findMany({
      select: { id: true, capacity: true },
    });

    const colors = await prisma.color.findMany({
      select: { id: true, name: true },
    });

    const os = await prisma.os.findMany({
      select: { id: true, name: true },
    });

    const features = await prisma.feature.findMany({
      select: { id: true, name: true },
    });

    res.json({
      brands: brands,
      colors: colors,
      features: features,
      os: os,
      capacity: capacity,
    });
  })
);

export default router;
