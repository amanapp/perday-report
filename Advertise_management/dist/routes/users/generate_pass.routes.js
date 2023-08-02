"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../database/models/user"));
const ioredis_1 = __importDefault(require("ioredis"));
// import { createClient } from "redis";
// const client = createClient()
// client.on("error", (err) => console.log("Redis Client Error", err));
// client.connect();
const redisClient = new ioredis_1.default({
    host: '192.168.2.157',
    port: 6379,
});
const gen_otp = async (req, res) => {
    const { email } = req.body;
    const userfind = await user_1.default.findOne({ where: { email } });
    let otp_value = Math.floor(1000 + Math.random() * 9000);
    await redisClient.set(`${email}_session`, otp_value);
    res.send({ Message: "generate otp successfully", otp_value });
};
exports.default = gen_otp;
//# sourceMappingURL=generate_pass.routes.js.map