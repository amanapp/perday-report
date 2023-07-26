import { Response,Request } from "express";
import Post from "../../Database/models/posts";
import UserModel from "../../Database/models/user";
import CommentModel from "../../Database/models/comment";

export default async (req:Request, res:Response) => {

  try{
    const { user_id,comment_message } = req.body;
    console.log(user_id);
    const inUser: any = await UserModel.findOne({ user_id: user_id });
    console.log("In User============>",inUser);
    const inPost: any = await Post.findOne({user_id: inUser._id});
    console.log('==================inPost==================\n\n',inPost);


    const users = new CommentModel({
        user_id:inPost._id,
        comment_message
    });


    await users.save();



    res.status(201).json({ message: 'comments info update successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal server error' });
  }
  
}



