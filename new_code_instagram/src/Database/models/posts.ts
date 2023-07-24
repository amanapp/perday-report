import mongoose, { Schema } from "mongoose";
import User from "./user";

interface Post {
  user_id: mongoose.Types.ObjectId;
  post_content: string;
  post_tag: object;
  created_At: Date;
  updated_At: Date;
}


const PostSchema: Schema = new Schema({
 
  user_id: {
    type:mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  post_content: { type: String, required: true },
  post_tag: { type: Object, required: true },
  created_At: { type: Date, default: Date.now },
  updated_At: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
