import { Response,Request } from "express";
import session from '../../Database/models/session'
import User from '../../Database/models/user'

export default async (req:Request, res:Response) => {

  try{
    const { user_id,status,expire_At}=req.body;
    console.log(req.body)
    const objectId:any = await User.findOne({user_id:user_id});
   
    const sessions = new session({
      
      user_id:objectId._id,
      status,
      expire_At
    });


    await sessions.save();



    res.status(201).json({ message: 'session update successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal server error' });
  }
  
}



