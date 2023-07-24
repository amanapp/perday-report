
import { Response,Request } from "express";
import jwt from 'jsonwebtoken';
import User from '../../Database/models/user'
import bcrypt from 'bcrypt';


const login = async (req:Request, res:Response) => {
    
    try {
        const { user_id, password } = req.body;
    
        const user:any = await User.findOne({user_id:user_id});
         
        if (!user_id) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
    
        const token = jwt.sign({ user_id }, 'secret', { expiresIn: '1h' });
    
        res.status(200).json({ message: 'Login successful', token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    res.json({ message: 'login access successfully' });

  
}



export default login ;