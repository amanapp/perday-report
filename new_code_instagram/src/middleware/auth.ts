
import express, { Request, Response, NextFunction } from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';
import { redisClient } from "../sessiondb/session";


export default async(req: Request, res: Response, next: NextFunction) => {
  console.log("Enter in verify function")
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
 
     const decodedToken:any=<JwtPayload>jwt.verify(token, 'secret');
     console.log(decodedToken)
     req.body.user_id=decodedToken?.user_id;
      next();
    
  };