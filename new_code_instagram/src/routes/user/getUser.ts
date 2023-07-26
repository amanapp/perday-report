import { Response,Request } from "express";
import User from '../../Database/models/user'
import { Redis } from "ioredis";
import { any } from "joi";

import { createClient } from "redis";
const client = createClient()
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();

export default async (req:Request, res:Response) => {

  try{
    const {user_id }=req.body;

    const user:any = await User.findOne({user_id:user_id});
         console.log(user);
        if (!user_id) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
    const parents='Apna_Data'
    const keyName='users';
    let responseArray='';
    const getCacheData = await client.hGet(parents,keyName);
    // console.log('setkey::', getCacheData);

    if(getCacheData){
      responseArray = getCacheData;
        console.log('get cache');
    }else{
      responseArray= user
      console.log('set cache');
      client.hSet(parents,keyName,JSON.stringify(user))
      
    }


    res.status(201).json(user);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal server error' });
  }
  
}



