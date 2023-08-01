import { Response,Request } from "express";
import Product from "../../database/models/product";
import User from "../../database/models/user";
import Address from "../../database/models/address";





const add_product=async(req:Request, res:Response)=>{
    try {

      const {username,product_name,description,product_pic,bidding,base_price,title}=req.body;
      
      const userfind:any = await User.findOne({ where: { username } });
     const address_details =await Address.findOne({where:{id:userfind.id}})

      
        const user = await Product.create({ 
            product_name,
            description,
            product_pic,
            bidding,
            base_price,
            title,
            user_id:userfind.id,
            categries_id:"1",
            address_id:address_details.id
        });
         
        res.send({ Message:"Product add successfully"});
    } catch (error) {
        
      }
}
export default add_product;