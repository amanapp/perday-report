import mongoose, { Document, Schema } from 'mongoose';
import Post from './posts';
import { string } from 'joi';

interface Like extends Document {
  user_id: mongoose.Types.ObjectId;
  count:Number;
  created_At:Date;
  updated_At:Date;

}

const Like: Schema<Like> = new Schema<Like>({
  user_id: { 
    type:mongoose.Schema.Types.ObjectId,
    ref: Post,
    required: true 
    },
  count: { type: Number,required: true },
  created_At: { type: Date, default: Date.now },
  updated_At: { type: Date, default: Date.now },
  
});

const LikeModel = mongoose.model<Like>('Like', Like);

export default LikeModel;