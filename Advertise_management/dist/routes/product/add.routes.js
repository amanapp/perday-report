"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../../database/models/product"));
const user_1 = __importDefault(require("../../database/models/user"));
const address_1 = __importDefault(require("../../database/models/address"));
const add_product = async (req, res) => {
    try {
        const { username, product_name, description, product_pic, bidding, base_price, title } = req.body;
        const userfind = await user_1.default.findOne({ where: { username } });
        const address_details = await address_1.default.findOne({ where: { id: userfind.id } });
        const user = await product_1.default.create({
            product_name,
            description,
            product_pic,
            bidding,
            base_price,
            title,
            user_id: userfind.id,
            categries_id: "1",
            address_id: address_details.id
        });
        res.send({ Message: "Product add successfully" });
    }
    catch (error) {
    }
};
exports.default = add_product;
//# sourceMappingURL=add.routes.js.map