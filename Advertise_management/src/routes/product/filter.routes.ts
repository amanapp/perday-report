import { Response,Request } from "express";
import User from "../../database/models/user";
import Product from "../../database/models/product";
import Category from "../../database/models/categries";


const get_product_filter = async (req:Request, res:Response) => {
   
    try {
        const {category_id} = req.body;

        const categries:any = await Category.findAll({ where: { id:category_id } });

       
        res.send({ categries });
  
    } catch (error) {
        res.status(400).json({error:"internal server error"});
    }
    
} 

export default get_product_filter;