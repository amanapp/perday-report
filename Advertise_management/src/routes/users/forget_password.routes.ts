import { Response,Request } from "express";
import User from "../../database/models/user";
import bcrypt from 'bcrypt';
import Redis from "ioredis";
// import { createClient } from "redis";
// const client = createClient()
// client.on("error", (err) => console.log("Redis Client Error", err));
// client.connect();
const redisClient = new Redis({
    host: '192.168.2.157',
    port: 6379,
  });

const pass_forget = async (req:Request, res:Response) => {
    const { email,newpassword,otp} = req.body;
    try{
       
       if(otp==(await redisClient.get(`${email}_session`))){
        const userfind:any = await User.findOne({ where: { email } });
        if(userfind){
            const hashedPassword = await bcrypt.hash(newpassword, 2);

            userfind.password=hashedPassword;
            await userfind.save();
            res.send({ Message:"update password successfully"});

        }else{
            throw Error("Error upadting password");
        }    
       }
    
   
    res.send({ Message:"invalid otp , oops!!!"});

    }
    
   catch(e){
      res.send("internal server error ");
   }
     
     
}

export default pass_forget;