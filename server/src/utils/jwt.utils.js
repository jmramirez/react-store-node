import jwt from 'jsonwebtoken';
import environment from '../config/environment';
import expressJwt from 'express-jwt'

export default class JWTUtils {
  static generateAccessToken(payload, options = {}) {
    const { expiresIn = '12h' } = options;
    return jwt.sign(payload, environment.jwtSecret, { expiresIn });
  }

  static generateRefreshToken(payload) {
    return jwt.sign(payload, environment.jwtSecret);
  }

  static verifyAccessToken(accessToken) {
    return jwt.sign(accessToken, environment.jwtSecret);
  }

  static verifyRefreshToken(accessToken) {
    return jwt.sign(accessToken, environment.jwtSecret);
  }

  static requiredSignin = expressJwt({
    secret: environment.jwtSecret,
    userProperty: 'auth',
    algorithms: ['HS256']
  })
}
