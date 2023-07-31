import { Response,Request } from "express";
import User from "../../database/models/user";
import bcrypt from 'bcrypt';
import { createClient } from "redis";
const client = createClient()
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();

const gen_otp = async (req:Request, res:Response) => {
    const { email} = req.body;
    const userfind:any = await User.findOne({ where: { email } });

    let otp_value = Math.floor(1000 + Math.random() * 9000);
    await client.set(`${email}_session`,otp_value,{EX:300});
   
    res.send({ Message:"generate otp successfully",otp_value});
}

export default gen_otp;