import { Response,Request } from "express";
import User from "../../database/models/user";
import bcrypt from 'bcrypt';


// :"\x0123456789ABCDEF"
const signup = async (req:Request, res:Response) => {
    const { username,fullname,email, password ,status,mob,gender,Dob,address} = req.body;
    console.log(req.body)
    
    const hashedPassword = await bcrypt.hash(password, 2);
    
    const user = await User.create({ 
        username,
        fullname,
        email,
         password:hashedPassword,
         status,
        //  profile_pic:"\x0123456789ABCDEF",
         mob,
         gender,
         Dob,
         address
    });
   
    res.send({ Message:"Signup successfully"});
  
}

export default signup;