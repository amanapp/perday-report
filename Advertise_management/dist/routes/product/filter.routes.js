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
    }
    catch (error) {
        res.status(400).json({ error: "internal server error" });
    }
};
exports.default = get_product_filter;
//# sourceMappingURL=filter.routes.js.map