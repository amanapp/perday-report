import { Response,Request } from "express";
import User from "../../database/models/user";


const delete_user = async (req:Request, res:Response) => {
   
    try {
        const { username} = req.body;
        const user:any = await User.destroy({ where: { username } }); 
        res.send({ user });
  
    } catch (error) {
        res.status(400).json({error:"internal server error"});
    }
    
} 

export default delete_user;