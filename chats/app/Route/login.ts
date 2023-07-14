import { Response,Request } from "express";
import jwt from 'jsonwebtoken';
import User from '../Database/models/user'


const login = async (req:Request, res:Response) => {
    const { username, password } = req.body;
    const user:any = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).send({ message: 'Invalid username or password' });
    }
    if (user.password !== password) {
      return res.status(401).send({ message: 'Invalid username or password' });
    }
    const userId = user.id;
    const token = jwt.sign({ userId }, 'secret');
    res.send({ token });
  }

export default login;