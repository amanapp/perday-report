"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductJoiMiddleware = exports.addressJoiMiddleware = exports.loginJoiMiddleware = exports.signUpJoiMiddleware = void 0;
const joi_1 = __importDefault(require("joi"));
const signUpSchema = joi_1.default.object({
    username: joi_1.default.string().min(3).max(15).required(),
    fullname: joi_1.default.string().min(2).max(15).required(),
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
    status: joi_1.default.string(),
    mob: joi_1.default.string(),
    gender: joi_1.default.string(),
    Dob: joi_1.default.date(),
    address: joi_1.default.string()
});
const loginSchema = joi_1.default.object({
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required()
});
const userAddressSchema = joi_1.default.object({
    house_no: joi_1.default.string().min(3).max(15).required(),
    strert_no: joi_1.default.number().required(),
    area: joi_1.default.string().required(),
    landmark: joi_1.default.string(),
    city: joi_1.default.string(),
    country: joi_1.default.string(),
    zip_no: joi_1.default.number(),
    status: joi_1.default.boolean(),
    address_type: joi_1.default.string()
});
const addProductSchema = joi_1.default.object({
    Product_name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    bidding: joi_1.default.string(),
    base_price: joi_1.default.number(),
    title: joi_1.default.string(),
    country: joi_1.default.string()
});
const signUpJoiMiddleware = (req, res, next) => {
    const { error } = signUpSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.signUpJoiMiddleware = signUpJoiMiddleware;
const loginJoiMiddleware = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.loginJoiMiddleware = loginJoiMiddleware;
const addressJoiMiddleware = (req, res, next) => {
    const { error } = userAddressSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.addressJoiMiddleware = addressJoiMiddleware;
const ProductJoiMiddleware = (req, res, next) => {
    const { error } = addProductSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.ProductJoiMiddleware = ProductJoiMiddleware;
//# sourceMappingURL=joi.middleware.js.map