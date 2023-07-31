import { Response,Request } from "express";
import User from "../../database/models/user";
import Product from "../../database/models/product";


const get_product_details = async (req:Request, res:Response) => {
   
    try {
        const { username} = req.body;

        const user:any = await User.findOne({ where: { username } });
        const product= await Product.findOne({where:{user_id:user.dataValues.id}})

       
        res.send({ product });
  
    } catch (error) {
        res.status(400).json({error:"internal server error"});
    }
    
} 

export default get_product_details;