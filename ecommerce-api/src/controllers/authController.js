import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const generateToken = (userId, displayName, role) => {
    return jwt.sign({userId, displayName, role},
    process.env.JWT_SECRET,
    {expiresIn:'1h', }
);
}

const checkUserExist = async 

const newUser = {displayName, email, hashPassword, role, avatar, phone};
await newUser.save();
resizeBy.status(201).json(newUser);

async function login(req, res) {
    try{
        const {email, password} = req.body;

        const userExist = await checkUserExist(email);
        if(!userExist){
            return res.status(400).json({message:'User does not exist, you have to sign in'});
        }
    }
    
}