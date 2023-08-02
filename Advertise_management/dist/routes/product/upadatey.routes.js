"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../database/models/user"));
const product_1 = __importDefault(require("../../database/models/product"));
const update_product = async (req, res) => {
    const { username, product_name, description, product_pic, base_price } = req.body;
    const userFind = await user_1.default.findOne({ where: { username } });
    const product_up = await product_1.default.update({
        product_name,
        description,
        product_pic,
        base_price,
    }, { where: { user_id: userFind.dataValues.id } });
    res.send({ Message: "product details upadte successfully" });
};
exports.default = update_product;
//# sourceMappingURL=upadatey.routes.js.map