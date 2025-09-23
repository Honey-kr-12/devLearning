import jwt from "jsonwebtoken";
import logger from "../config/logger.js";

const JWT_SECRET = process.env.JWT_SECRET || 'newsecretkey'
const JWT_EXPIRES_IN = '1d'

export const jwttoken = {
    sign: (payload) => {
        try {
            return jwt.sign(payload, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN})
        } catch (e) {
            logger.error('Failedd to authenticate token ',e)
            throw new Error('Failed to authenticate token')
            
        }
    },
    verify: (token) => {
        try {
            return jwt.sign(token, JWT_SECRET)
        } catch (e) {
            logger.error('Failedd to authenticate token ',e)
            throw new Error('Failed to authenticate token')
            
        }
    }
}