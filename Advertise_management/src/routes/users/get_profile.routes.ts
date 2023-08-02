import { Response,Request } from "express";
import User from "../../database/models/user";


const get_user = async (req:Request, res:Response) => {
   
    try {
        const { username} = req.body;
        const user:any = await User.findOne({ where: { username } });       
        res.send({ user });
  
    } catch (error) {
        res.status(400).json({error:"internal server error"});
    }
    
} 

export default get_user;