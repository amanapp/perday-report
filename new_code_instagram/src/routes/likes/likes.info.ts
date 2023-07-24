import { Response,Request } from "express";
import likes from '../../Database/models/like'

export default async (req:Request, res:Response) => {

  try{
    const { _id,user_id }=req.body;

   
    const users = new likes({
        _id,user_id
    });

    // console.log(users);

    await users.save();



    res.status(201).json({ message: 'like info update successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal server error' });
  }
  
}



