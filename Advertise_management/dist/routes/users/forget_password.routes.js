"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../database/models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();
const pass_forget = async (req, res) => {
    const { email, newpassword, otp } = req.body;
    try {
        if (otp == (await client.get(`${email}_session`))) {
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