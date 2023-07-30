import mongoose, { Document, Schema } from 'mongoose';
import joi from 'joi'
interface User extends Document {
  // _id: string;
  name: string;
  email: string;
  user_id:string;
  password: string;
  phone_no:string;
  created_At:Date;
  updated_At:Date;

}

const userSchema: Schema<User> = new Schema<User>({
  // _id: { type: String, required: true },
  name: 
  { type: String, required: true }
  ,
  email: { type: String, required: true },
  user_id: { type: String, required: true },
  password: { type: String, required: true },
  phone_no: { type: String, required: true },
  
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;