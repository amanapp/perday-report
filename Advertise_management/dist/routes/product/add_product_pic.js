"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../database/models/user"));
const product_1 = __importDefault(require("../../database/models/product"));
const add_profile_photos = async (req, res) => {
    const { username } = req.body;
    const { originalname, buffer } = req.file;
    const userfind = await user_1.default.findOne({ where: { username } });
    const productSearch = await product_1.default.findOne({ where: { user_id: userfind.id } });
    const Id = productSearch.dataValues.id;
    const productPic = await product_1.default.update({
        product_pic: buffer
    }, { where: { id: Id } });
    res.send({ Message: "update successfully" });
};
exports.default = add_profile_photos;
//# sourceMappingURL=add_product_pic.js.map