import mongoose, { Document, Schema } from 'mongoose';
import User from './posts'
import { string } from 'joi';
interface Session extends Document {
  user_id:mongoose.Types.ObjectId;
  status?:string
  expire_At?:string;
  created_At:Date;
  updated_At:Date;

}

const SessionSchema: Schema<Session> = new Schema<Session>({
  
  user_id: { 
    type:mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
   },
  status: { type: String, required: true },

  expire_At:{ type: String, required: true },
  created_At: { type: Date, default: Date.now },
  updated_At: { type: Date, default: Date.now },
  
});

const SessionModel = mongoose.model<Session>('Session', SessionSchema);

export default SessionModel;