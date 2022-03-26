import { Router } from 'express';
import prisma from './../config/client';
import asyncWrapper from './../utils/asyncWrapper';
import JWTUtils from "../utils/jwt.utils";
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_API_KEY);


const router = Router();




router.route('/orders').post(
  JWTUtils.requiredSignin,
  asyncWrapper(async (req,res) => {
    const {
      stripeToken,
      firstName,
      lastName,
      address1,
      address2,
      townCity,
      country,
      postCode,
      items
    } = req.body

    const { email } = req.auth
    let order = await prisma.Order.create({
      data: {
        user: {
          connect: { email: email}
        },
        deliveryAddress: {
          create: {
            address1: address1,
            address2: address2,
            townCity: townCity,
            country: country,
            postCode: postCode
          }
        },
        Items: {
          create: items
        }
      }
    })

    const orderWithItems = await prisma.Order.findUnique({
      where: { id: order.id},
      select: {
        Items: {
          select: {
            quantity: true,
            ProductVariant: {
              select: { price: true}
            }
          }
        }
      }
    })


    const reducer = (accumulator, item) => accumulator + ( item.quantity * item.ProductVariant.price);
    const total = orderWithItems.Items.reduce(reducer, 0)


    const charge = await stripe.charges.create({
      amount: total,
      currency: "cad",
      source: stripeToken,
      description: `Order ${order.id} payment`
    });

    if(charge.failure_code) {
      order = await prisma.Order.update({
        where:{ id: order.id},
        data: { paymentStatus: 'Decline'}
      })
    } else {
      order = await prisma.Order.update({
        where:{ id: order.id},
        data: { paymentStatus: 'Paid'}
      })
    }

    res.json({
      orderId: order.id,
      paymentStatus: order.paymentStatus
    })
  })
)

export default router