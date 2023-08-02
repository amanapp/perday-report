"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const redis_1 = require("redis");
const user_1 = __importDefault(require("../database/models/user"));
const session_1 = __importDefault(require("../database/models/session"));
const client = (0, redis_1.createClient)();
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();
async function auth(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    console.log(" enter session info ");
    const verifyToken = jsonwebtoken_1.default.verify(token, 'secret');
    console.log(verifyToken);
    let findObject = verifyToken?.username;
    const userfind = await user_1.default.findOne({ where: { username: findObject } });
    if (userfind.id) {
        let findSession = await client.get(`${verifyToken.username}_session`) || await session_1.default.findOne({ where: { id: userfind.id } });
        if (findSession.length != 0) {
            req.body.username = verifyToken.username;
            next();
        }
        else {
            res.send("Session out");
        }
    }
    else {
        res.send({ message: "invalid token" });
    }
}
exports.default = auth;
//# sourceMappingURL=session.js.map