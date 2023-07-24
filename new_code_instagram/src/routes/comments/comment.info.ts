import { Response,Request } from "express";
import jwt from 'jsonwebtoken';
import Comment from '../../Database/models/comment'
import post from '../../Database/models/posts'

export default async (req:Request, res:Response) => {

  try{
    const { user_id,replie  }=req.body;

const find_user= await post.findOne({user_id});
    const users = new Comment({
        _id:find_user  ,
        user_id,replie 
    });


    await users.save();



    res.status(201).json({ message: 'comments info update successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal server error' });
  }
  
}



