"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../database/models/user"));
const product_1 = __importDefault(require("../../database/models/product"));
const product_bidding = async (req, res) => {
    try {
        const { username, bidding } = req.body;
        const user = await user_1.default.findOne({ where: { username } });
        const product = await product_1.default.findOne({ where: { user_id: user.dataValues.id } });
        const upadte_amount_of_bidding = product.base_price + bidding;
        const product_up = await product_1.default.update({
            bidding: upadte_amount_of_bidding
        }, { where: { user_id: user.dataValues.id } });
        res.send("bidding sucessfully");
    }
    catch (error) {
        res.status(400).json({ error: "internal server error" });
    }
};
exports.default = product_bidding;
//# sourceMappingURL=bidding.js.map