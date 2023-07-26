import { Response,Request } from "express";
import post from '../../Database/models/posts'
import User from '../../Database/models/user'

export default async (req:Request, res:Response) => {

  try{
    const { user_id,post_content,post_tag}=req.body;
    // console.log(req.body);

    const find_user:any= await User.findOne({user_id});
    // console.log(find_user);

    const posts:any = new post({
        
        user_id:find_user._id,

        post_content,
        post_tag
    });

    // console.log(posts);

    await posts.save();
    console.log(posts);




    res.status(201).json({ message: 'post info update successfully' });
  } catch (e) {
    // console.error(e);
    res.status(500).json({ message: 'Internal server error' });
  }
  
}



