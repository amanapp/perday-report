import { Response,Request } from "express";
import User from "../../database/models/user";



const add_profile_photos = async (req:Request, res:Response) => {

    const { username} = req.body;

    const { originalname, buffer } = req.file;
    
    const userfind:any = await User.findOne({ where: { username } });
    console.log("===================userfind",userfind.id)
    const userupdate = await User.update({ 
        profile_pic:buffer,
       
    }, { where: { id: userfind.id } });

     console.log("=================upladted pic =====",userupdate)
    res.send({ Message:"update successfully"});
  
}

export default add_profile_photos;