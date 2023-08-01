"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../database/models/user"));
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();
const gen_otp = async (req, res) => {
    const { email } = req.body;
    const userfind = await user_1.default.findOne({ where: { email } });
    let otp_value = Math.floor(1000 + Math.random() * 9000);
    await client.set(`${email}_session`, otp_value, { EX: 300 });
    res.send({ Message: "generate otp successfully", otp_value });
};
exports.default = gen_otp;
//# sourceMappingURL=generate_pass.routes.js.map