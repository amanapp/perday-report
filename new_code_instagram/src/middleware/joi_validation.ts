import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const signUpSchema = Joi.object({
    name: Joi.string().min(3).max(15).required(),
    email: Joi.string().email().required(),
    user_id: Joi.string().min(3).max(30).required(),
    password: Joi.string().required(),
    phone_no: Joi.string()
});


const loginSchema = Joi.object({
    user_id: Joi.string().required(),
    password: Joi.string().required()
});


const postSchema = Joi.object({
    post_content: Joi.string().required(),
    post_tag: Joi.string().required(),
    likes: Joi.number().default(0),
    comments: Joi.number().default(0),
});


const likeSchema = Joi.object({
    // userId: Joi.string().required(),
    count: Joi.string().required(),
});


const commentSchema = Joi.object({
    replies: Joi.string().required(),
    // text: Joi.string().required(),
});




const sessionSchema = Joi.object({
    status: Joi.string().required(),
    expires_at: Joi.date(),


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


export const addPostJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = postSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};


export const likeJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = likeSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};


export const commentJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = commentSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export const sessionJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = sessionSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};