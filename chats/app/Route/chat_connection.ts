

import { Response,Request } from "express";
import Message from '../Database/models/messages'


const connection = async (req:Request, res:Response) => {
  const { senderId ,reciverId } = req.body;
   const connection_id = senderId+"ROOM"+reciverId;//salt make
   console.log(connection_id);
  const message = await Message.create({ senderId ,reciverId,connection_id});
  res.send({ message });
}

export default connection;