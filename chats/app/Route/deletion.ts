import { Response,Request } from "express";
import chat from '../Database/models/chat'


const delete_message = async (req: Request, res: Response) => {
    try {
      const value:number =Number(req.params.id);
      console.log(value);
      const question = await chat.destroy({
        where: { id: value }
      });
      res.status(200).json({ "message": "chat deleted successfully !"})
     } catch (error) {
      res.status(422).json({ error })
     }
  }

export default delete_message;