import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { createClient } from "redis";
import sessionModel  from "../Database/models/session";
import User from "../Database/models/user";
const client = createClient()

client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();
export default  async function auth(req:Request,res:Response,next:NextFunction){
    const token = req.headers.authorization?.split(' ')[1];
    console.log(" enter session info ")
   
    const verifyToken :any = jwt.verify(token,'secret');
    console.log(verifyToken)
    let findObject =verifyToken?.user_id;
    console.log(findObject);
    const Details:any = await User.findOne({user_id:findObject});
     console.log(Details._id)

    // console.log(Details._id)
    // client.set(`${verifyToken.user_id}_session`,Details)

    if(Details._id){
        let findSession:any = await client.get(`${verifyToken.user_id}_session`) || await sessionModel.find({user_id:verifyToken._id})

        if(findSession.length!=0){
            req.body.user_id= verifyToken.user_id;
            next()
        }else{
            res.send("Session out")
        }
     

    }else{
        res.send({message:"invalid token"})
    }

}