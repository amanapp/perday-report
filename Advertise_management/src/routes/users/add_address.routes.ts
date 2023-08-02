import { Response,Request } from "express";
import jwt from 'jsonwebtoken';
import User from "../../database/models/user";
import Address from "../../database/models/address";


const add_address = async (req:Request, res:Response) => {
    const { username,house_no,street_no,area,landmark,city,country,zip_no,status,address_type} = req.body;
     
    const userFind:any = await User.findOne({ where: { username } });

    
    const user = await Address.create({ 
        user_id:userFind.id,
        house_no, 
        street_no,
        area,
        landmark,
        city,
        country,
        zip_no,
        status,
        address_type
    });
   
    res.send({ Message:"Add address successfully"});
  
}

export default add_address;