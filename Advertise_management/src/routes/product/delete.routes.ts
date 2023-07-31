import { Response,Request } from "express";
import User from "../../database/models/user";
import Product from "../../database/models/product";


const delete_product = async (req:Request, res:Response) => {
   
    try {
        const { username} = req.body;
        const user:any = await User.findOne({ where: { username } }); 
        const product= await Product.destroy({where:{user_id:user.dataValues.id}})
        res.status(200).send({ product });
  
    } catch (error) {
        res.status(400).json({error:"internal server error"});
    }
    
} 

export default delete_product;