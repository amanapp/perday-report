import { Response,Request } from "express";
import User from "../../database/models/user";
import Product from "../../database/models/product";
import Category from "../../database/models/categries";
import sequelize from "../../database/dbconnection";
import QueryTypes from "sequelize/lib/query-types";


const get_product_filter = async (req:Request, res:Response) => {
   
    try {
        const {category_id} = req.body;

        const categries:any = await Category.findAll({ where: { id:category_id } });

       
        res.send({ categries });




        // const {category_id} = req.body;
        // console.log('//////////////////////////////////////////////',category_id);
        // // const allProductId = JSON.stringify(await Category.findAll({where:{[Op.or]:[{parent_id: category_id},{id: category_id}]},attributes: ['id']}))
        // // const arrayOfId= Object.values(JSON.parse(allProductId)).map((obj: any) => obj.id);
        // // console.log(arrayOfId);
        // // const result = await Product.findOne({
        // //     attributes: [
        // //       [sequelize.fn('GROUP_CONCAT', sequelize.col(category_id)), 'ids']
        // //     ]
        // //   });
        // // const query = await sequelize.query(`SELECT array_agg(id) AS ids FROM categories `);
        // const query:any = await sequelize.query(`SELECT array_agg(id) AS ids FROM categories WHERE "categories"."parent_id" = ${category_id} OR "id" = ${category_id}`, { type: QueryTypes.SELECT });
        // const category_list=JSON.parse(JSON.stringify(query))[0].ids;
        // console.log(category_list);
        
        // const products = await Product.findAll({
        //     attributes: ['name'],
        //     where: {
        //       category_id: category_list,
        //     }
        //   });
        //   console.log(products);
        // return res.status(200).json(products);
  
    } catch (error) {
        res.status(400).json({error:"internal server error"});
    }
    
} 

export default get_product_filter;