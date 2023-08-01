import { Response,Request } from "express";
import jwt from 'jsonwebtoken';
import User from "../../database/models/user";
import bcrypt from 'bcrypt';
import Session from "../../database/models/session";
import { createClient } from "redis";
const client = createClient()
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();

const login = async (req:Request, res:Response) => {
   
    try {
        const { username, password } = req.body;
        const user:any = await User.findOne({ where: { username } });
        const passwords=await bcrypt.compare(password,user.password)
        
        if ((!user)&&passwords ){
            return res.status(401).send({ message: 'Invalid username or password' });
        }

        //session created 
        const sessionData = await Session.create({ 
            username:username,
            status:true
        });  

        await client.set(`${user.username}_session`,JSON.stringify(sessionData),{EX:300});

        const token = jwt.sign({ username }, 'secret');
        res.send({ msg:"login sucessfully ",token });

    } catch (error) {
        res.status(400).json({error:"internal server error"});
    }
    
} 

export default login;