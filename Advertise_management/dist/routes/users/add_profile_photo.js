"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../database/models/user"));
const add_profile_photos = async (req, res) => {
    const { username } = req.body;
    const { originalname, buffer } = req.file;
    const userfind = await user_1.default.findOne({ where: { username } });
    console.log("===================userfind", userfind.id);
    const userupdate = await user_1.default.update({
        profile_pic: buffer,
    }, { where: { id: userfind.id } });
    console.log("=================upladted pic =====", userupdate);
    res.send({ Message: "update successfully" });
};
exports.default = add_profile_photos;
//# sourceMappingURL=add_profile_photo.js.map