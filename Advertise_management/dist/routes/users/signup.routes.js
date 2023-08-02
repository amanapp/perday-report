"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../database/models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// :"\x0123456789ABCDEF"
const signup = async (req, res) => {
    const { username, fullname, email, password, status, mob, gender, Dob } = req.body;
    console.log(req.body);
    const hashedPassword = await bcrypt_1.default.hash(password, 2);
    const user = await user_1.default.create({
        username,
        fullname,
        email,
        password: hashedPassword,
        status,
        //  profile_pic:"\x0123456789ABCDEF",
        mob,
        gender,
        Dob,
    });
    res.send({ Message: "Signup successfully" });
};
exports.default = signup;
//# sourceMappingURL=signup.routes.js.map