"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../database/models/user"));
const get_user = async (req, res) => {
    try {
        const { username } = req.body;
        const user = await user_1.default.findOne({ where: { username } });
        res.send({ user });
    }
    catch (error) {
        res.status(400).json({ error: "internal server error" });
    }
};
exports.default = get_user;
//# sourceMappingURL=get_profile.routes.js.map