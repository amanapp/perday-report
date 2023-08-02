"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../database/models/user"));
const product_1 = __importDefault(require("../../database/models/product"));
const get_product_details = async (req, res) => {
    try {
        const { username } = req.body;
        const user = await user_1.default.findOne({ where: { username } });
        const product = await product_1.default.findOne({ where: { user_id: user.dataValues.id } });
        res.send({ product });
    }
    catch (error) {
        res.status(400).json({ error: "internal server error" });
    }
};
exports.default = get_product_details;
//# sourceMappingURL=product_details.routes.js.map