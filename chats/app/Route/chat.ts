import { Response,Request } from "express";
import chat from '../Database/models/chat'


const chats = async (req:Request, res:Response) => {
  const { connection, senderMessage ,reciverMessage } = req.body;
  const message = await chat.create({  senderMessage ,reciverMessage,connection});
  res.send({ message });
}

export default chats;