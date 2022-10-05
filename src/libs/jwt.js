import { TOKEN_SECRET } from "../config.js";
import jwt from 'jsonwebtoken';

export const createAccessToken = (payload) => {
  return jwt.sign(payload, TOKEN_SECRET, {
    expiresIn: "1d",
  });
};
