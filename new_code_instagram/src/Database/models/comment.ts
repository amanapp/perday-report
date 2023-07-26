import mongoose, { Document, Schema } from 'mongoose';
import Post from './posts';

interface Comment extends Document {
  user_id:mongoose.Types.ObjectId,
  comment_message:object
  created_At:Date;
  updated_At:Date;

}

const Comment: Schema<Comment> = new Schema<Comment>({
  user_id: { 
    type:mongoose.Schema.Types.ObjectId,
    ref: Post,
    required: true },
  comment_message: { type: Object, required: true },
  created_At: { type: Date, default: Date.now },
  updated_At: { type: Date, default: Date.now },
// 
  
});

const CommentModel = mongoose.model<Comment>('Comment', Comment);

export default CommentModel;