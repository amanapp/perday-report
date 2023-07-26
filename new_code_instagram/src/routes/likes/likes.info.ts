import { Response, Request } from "express";
import likes from "../../Database/models/like";
import Post from "../../Database/models/posts";
import UserModel from "../../Database/models/user";
export default async (req: Request, res: Response) => {
  try {
    const { user_id } = req.body;
    console.log(user_id);
    const inUser: any = await UserModel.findOne({ user_id: user_id });
    console.log("In User============>",inUser);
    const inPost: any = await Post.findOne({user_id: inUser._id});
    console.log('==================inPost==================\n\n',inPost);

    const users = new likes({
      user_id: inPost._id,
      count: 1,

    });

    // console.log(users);

    await users.save();

    res.status(201).json({ message: "like info update successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
  }
};
