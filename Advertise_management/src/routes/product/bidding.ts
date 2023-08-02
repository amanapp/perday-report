import { Response,Request } from "express";
import User from "../../database/models/user";
import Product from "../../database/models/product";


const product_bidding = async (req:Request, res:Response) => {
   
    try {
        const { username,bidding} = req.body;
        const user:any = await User.findOne({ where: { username } });
        const product= await Product.findOne({where:{user_id:user.dataValues.id}})
        const upadte_amount_of_bidding = product.base_price+bidding;
        const product_up = await Product.update({ 
           bidding:upadte_amount_of_bidding
       }, { where: { user_id:user.dataValues.id } });

        res.send("bidding sucessfully");
  
    } catch (error) {
        res.status(400).json({error:"internal server error"});
    }
    
} 

export default product_bidding;