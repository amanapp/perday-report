import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const signUpSchema = Joi.object({
    username: Joi.string().min(3).max(15).required(),
    fullname: Joi.string().min(2).max(15).required(),
    email:Joi.string().required(),
    password: Joi.string().required(),
    status:Joi.string(),
    mob: Joi.string(),
    gender:Joi.string(),
    Dob: Joi.date(),
    address: Joi.string()
});


const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
});

const userAddressSchema = Joi.object({
    house_no: Joi.string().min(3).max(15).required(),
    strert_no: Joi.number().required(),
    area:Joi.string().required(),
    landmark: Joi.string(),
    city:Joi.string(),
    country: Joi.string(),
    zip_no:Joi.number(),
    status: Joi.boolean(),
    address_type: Joi.string()
});

const addProductSchema=Joi.object({
    Product_name: Joi.string().required(),
    description: Joi.string().required(),
    bidding:Joi.string(),
    base_price: Joi.number(),
    title:Joi.string(),
    country: Joi.string()
   
});

export const signUpJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = signUpSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export const loginJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export const addressJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = userAddressSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
export const ProductJoiMiddleware= (req: Request, res: Response, next: NextFunction) => {
    const { error } = addProductSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
