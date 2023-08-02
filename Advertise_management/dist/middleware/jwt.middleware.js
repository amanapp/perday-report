"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = async (req, res, next) => {
    console.log("Enter in verify function");
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token);
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const decodedToken = jsonwebtoken_1.default.verify(token, 'secret');
    console.log(decodedToken);
    req.body.username = decodedToken?.username;
    console.log('body', req.body);
    next();
};
//# sourceMappingURL=jwt.middleware.js.map