import { Router } from 'express';
import prisma from './../config/client';
import asyncWrapper from './../utils/asyncWrapper';
import bcrypt from "bcrypt";
import {body, check, validationResult} from "express-validator";
import JWTUtils from "../utils/jwt.utils";

const router = Router();

router.route('/auth').post(
  check('email', 'Email is required to login').notEmpty(),
  check('email', 'Please fill a valid email address').isEmail().normalizeEmail(),
  check('password', 'Password is required to login').notEmpty(),
  asyncWrapper(async(req,res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()})
    }


    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email: email},
      include: {
        Roles: true
      }
    })

    const roles = user.Roles.map((role) => role.name)

    const validPassword = await  bcrypt.compare(password, user.password)

    if(!user || !validPassword) {
      return res.status(401)
        .send({ success: false, message: 'Invalid credentials'})
    }

    const payload = { email }
    const token = JWTUtils.generateAccessToken(payload)
    const refreshToken = JWTUtils.generateRefreshToken(payload)


    res.json({
      token,
      refreshToken,
      fullName: `${user.firstName} ${user.lastName}`,
      roles: roles
    })
  })
)

export default router