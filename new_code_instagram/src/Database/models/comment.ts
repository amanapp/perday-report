import mongoose, { Document, Schema } from 'mongoose';
import Post from './posts';

interface Comment extends Document {
  _id:mongoose.Types.ObjectId,
  replie:object
  created_At:Date;
  updated_At:Date;

}

const Comment: Schema<Comment> = new Schema<Comment>({
  _id: { 
    type:mongoose.Schema.Types.ObjectId,
    ref: Post,
    required: true },
  replie: { type: Object, required: true },
  created_At: { type: Date, default: Date.now },
  updated_At: { type: Date, default: Date.now },
// 
  
});

const CommentModel = mongoose.model<Comment>('Comment', Comment);

export default CommentModel;