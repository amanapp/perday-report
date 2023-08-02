"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../../database/models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const session_1 = __importDefault(require("../../database/models/session"));
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await user_1.default.findOne({ where: { username } });
        const passwords = await bcrypt_1.default.compare(password, user.password);
        if ((!user) && passwords) {
            return res.status(401).send({ message: 'Invalid username or password' });
        }
        //session created 
        const sessionData = await session_1.default.create({
            username: username,
            status: true
        });
        await client.set(`${user.username}_session`, JSON.stringify(sessionData), { EX: 300 });
        const token = jsonwebtoken_1.default.sign({ username }, 'secret');
        res.send({ msg: "login sucessfully ", token });
    }
    catch (error) {
        res.status(400).json({ error: "internal server error" });
    }
};
exports.default = login;
//# sourceMappingURL=login.routes.js.map