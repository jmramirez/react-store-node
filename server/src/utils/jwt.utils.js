import jwt from 'jsonwebtoken';
import environment from '../config/environment';

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
}
