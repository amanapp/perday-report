import mongoose, { Document, Schema } from 'mongoose';
import Post from './posts';

interface Like extends Document {
  _id: mongoose.Types.ObjectId;
  count:Number;
  created_At:Date;
  updated_At:Date;

}

const Like: Schema<Like> = new Schema<Like>({
  _id: { 
    type:mongoose.Schema.Types.ObjectId,
    ref: Post,
    required: true 
    },
  count: { type: Number,autoIncrement: true,required: true },


  created_At: { type: Date, default: Date.now },
  updated_At: { type: Date, default: Date.now },
  
});

const LikeModel = mongoose.model<Like>('Like', Like);

export default LikeModel;