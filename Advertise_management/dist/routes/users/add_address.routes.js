"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../database/models/user"));
const address_1 = __importDefault(require("../../database/models/address"));
const add_address = async (req, res) => {
    const { username, house_no, street_no, area, landmark, city, country, zip_no, status, address_type } = req.body;
    const userFind = await user_1.default.findOne({ where: { username } });
    const user = await address_1.default.create({
        user_id: userFind.id,
        house_no,
        street_no,
        area,
        landmark,
        city,
        country,
        zip_no,
        status,
        address_type
    });
    res.send({ Message: "Add address successfully" });
};
exports.default = add_address;
//# sourceMappingURL=add_address.routes.js.map