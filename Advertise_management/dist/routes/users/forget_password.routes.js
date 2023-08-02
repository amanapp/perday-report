"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../database/models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const ioredis_1 = __importDefault(require("ioredis"));
// import { createClient } from "redis";
// const client = createClient()
// client.on("error", (err) => console.log("Redis Client Error", err));
// client.connect();
const redisClient = new ioredis_1.default({
    host: '192.168.2.157',
    port: 6379,
});
const pass_forget = async (req, res) => {
    const { email, newpassword, otp } = req.body;
    try {
        if (otp == (await redisClient.get(`${email}_session`))) {
            const userfind = await user_1.default.findOne({ where: { email } });
            if (userfind) {
                const hashedPassword = await bcrypt_1.default.hash(newpassword, 2);
                userfind.password = hashedPassword;
                await userfind.save();
                res.send({ Message: "update password successfully" });
            }
            else {
                throw Error("Error upadting password");
            }
        }
        res.send({ Message: "invalid otp , oops!!!" });
    }
    catch (e) {
        res.send("internal server error ");
    }
};
exports.default = pass_forget;
//# sourceMappingURL=forget_password.routes.js.map