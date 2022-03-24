import { Router } from 'express';
import prisma from './../config/client';
import asyncWrapper from './../utils/asyncWrapper';
import {body, check, validationResult} from 'express-validator';
import bcrypt from 'bcrypt';
import JWTUtils from '../utils/jwt.utils';

const router = Router();

router.post(
  '/register',
  check('email', 'Email is required to register').notEmpty(),
  check('password', 'Password is required to register').notEmpty(),
  check('firstName', 'First Name is required to register').notEmpty(),
  check('lastName', 'Last Name is required to register').notEmpty(),
  asyncWrapper(async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send({ errors });
    }

    const { email } = req.body;
    const user = await prisma.User.findUnique({
      where: { email: email },
    });

    if (user) {
      return res
        .status(400)
        .send({ success: false, message: 'User already exists' });
    }

    const payload = { email };
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const accessToken = JWTUtils.generateAccessToken(payload);
    const refreshToken = JWTUtils.generateRefreshToken(payload);

    const userCreated = await prisma.User.create({
      data: {
        email: req.body.email,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        refreshToken: refreshToken,
        Roles: {
          connectOrCreate: [
            { where: { name: 'admin' }, create: { name: 'admin' } },
            { where: { name: 'customer' }, create: { name: 'customer' } },
          ],
        },
      },
    });

    const roles = await prisma.Role.findMany({
      where: {
        Users: {
          some: {
            email: userCreated.email
          }
        }
      }
    })

    return res.status(200).send({
      token: accessToken,
      refreshToken,
      fullName: `${userCreated.firstName} ${userCreated.lastName}`,
      roles: roles.map((role) => role.name),
      success: true,
      message: 'User registered successfully'
    });
  })
);

export default router;
