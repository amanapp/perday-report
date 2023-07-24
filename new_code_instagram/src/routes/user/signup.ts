import { Response,Request } from "express";
import jwt from 'jsonwebtoken';
import User from '../../Database/models/user'
import bcrypt from 'bcrypt';
import joi from 'joi';
// import { Redis } from "ioredis";

// const redisClient = new Redis({
//   host: '127.0.0.1',
//   port: 6379
// })

export default async (req:Request, res:Response) => {

  try{
    const {name, email ,user_id ,password ,phone_no }=req.body;

    const hashedPassword = await bcrypt.hash(password, 2);
    // const setKey = await redisClient.set('set_key_1', hashedPassword);
    // console.log('setkey::', setKey);

    const users = new User({
        name,
         email ,
         user_id ,
         password :hashedPassword,
         phone_no
    });

    // console.log(users);

    await users.save();

    res.status(201).json({ message: 'User Signup successfully'});
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal server error' });
  }
  
}



