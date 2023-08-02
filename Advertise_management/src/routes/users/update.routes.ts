import { Response,Request } from "express";
import User from "../../database/models/user";


const user_update = async (req:Request, res:Response) => {
    const { username,fullname ,status,mob,gender} = req.body;
    const userfind:any = await User.findOne({ where: { username } });
    const userupdate = await User.update({ 
        fullname,
         status,
         mob,
         gender,
    }, { where: { username: userfind.id } });
   
    res.send({ Message:"update successfully"});
  
}

export default user_update;