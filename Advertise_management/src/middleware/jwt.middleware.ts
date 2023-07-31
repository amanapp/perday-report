
import express, { Request, Response, NextFunction } from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';


export default async(req: Request, res: Response, next: NextFunction) => {
  console.log("Enter in verify function")
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token)
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
 
     const decodedToken:any=<JwtPayload>jwt.verify(token, 'secret');
     console.log(decodedToken)
     req.body.username=decodedToken?.username;
     console.log('body', req.body);
      next();
    
  };