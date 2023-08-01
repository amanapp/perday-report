"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../database/models/user"));
const user_update = async (req, res) => {
    const { username, fullname, status, mob, gender } = req.body;
    const userfind = await user_1.default.findOne({ where: { username } });
    const userupdate = await user_1.default.update({
        fullname,
        status,
        mob,
        gender,
    }, { where: { username: userfind.id } });
    res.send({ Message: "update successfully" });
};
exports.default = user_update;
//# sourceMappingURL=update.routes.js.map