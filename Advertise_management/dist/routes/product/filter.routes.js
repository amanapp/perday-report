"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categries_1 = __importDefault(require("../../database/models/categries"));
const get_product_filter = async (req, res) => {
    try {
        const { category_id } = req.body;
        const categries = await categries_1.default.findAll({ where: { id: category_id } });
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
    }
    catch (error) {
        res.status(400).json({ error: "internal server error" });
    }
};
exports.default = get_product_filter;
//# sourceMappingURL=filter.routes.js.map