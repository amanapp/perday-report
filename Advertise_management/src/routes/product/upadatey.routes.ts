import { Response,Request } from "express";
import User from "../../database/models/user";
import Product from "../../database/models/product";


const update_product = async (req:Request, res:Response) => {
    const { username,product_name,description,product_pic,base_price} = req.body;
     
    const userFind:any = await User.findOne({ where: { username } });
    
    const product_up = await Product.update({ 
        product_name,
        description,
        product_pic,
        base_price,
   }, { where: { user_id:userFind.dataValues.id } });
   
    res.send({ Message:"product details upadte successfully"});
  
}

export default update_product;