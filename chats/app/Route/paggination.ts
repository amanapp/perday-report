import { Response,Request } from "express";
import chat from '../Database/models/chat'


const paggination = async (req:Request, res:Response) => {
    const getPagination=(page:any,size:any)=>{
      const limit =size ? +(size): 3;
      const offset=page ? page *limit:0;
      return{limit,offset};
    }
    try{
      const {page, size } = req.query;
    const {limit,offset} = getPagination(Number(page), Number(size));
    
  
    const messages = await chat.findAndCountAll({limit,offset});
    res.send({ messages });
  
    }catch(e){
      res.status(400).send(e);
    }
  
  }

export default paggination;