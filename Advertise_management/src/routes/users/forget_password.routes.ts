import { Response,Request } from "express";
import User from "../../database/models/user";
import bcrypt from 'bcrypt';
import { createClient } from "redis";
const client = createClient()
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();

const pass_forget = async (req:Request, res:Response) => {
    const { email,password,otp} = req.body;
    try{
       
       if(otp==(await client.get(`${email}_session`))){
        const userfind:any = await User.findOne({ where: { email } });
        if(userfind){
            const hashedPassword = await bcrypt.hash(password, 2);

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