import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next)=> {
    const token = req.headers["Authorization"]
}
