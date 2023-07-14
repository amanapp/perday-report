import { Response,Request } from "express";
import jwt from 'jsonwebtoken';
import User from '../Database/models/user'


const signup = async (req:Request, res:Response) => {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    const userId = user.id;
    const token = jwt.sign({ userId }, 'secret');
    res.send({ Message:"submit info successfully"});
  
}

export default signup;