import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { createClient } from "redis";
import User from "../database/models/user";
import Session from "../database/models/session";

const client = createClient()
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();

export default  async function auth(req:Request,res:Response,next:NextFunction){
    const token = req.headers.authorization?.split(' ')[1];
    console.log(" enter session info ")
   
    const verifyToken :any = jwt.verify(token,'secret');
    console.log(verifyToken)
    let findObject =verifyToken?.username;
    const userfind:any = await User.findOne({ where: { username:findObject } });


   

    if(userfind.id){
        let findSession:any = await client.get(`${verifyToken.username}_session`)|| await Session.findOne({ where: { id:userfind.id } });

        if(findSession.length!=0){
            req.body.username= verifyToken.username;
            next()
        }else{
            res.send("Session out")
        }
     

    }else{
        res.send({message:"invalid token"})
    }

}