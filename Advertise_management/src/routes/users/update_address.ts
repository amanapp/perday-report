import { Response,Request } from "express";
import jwt from 'jsonwebtoken';
import User from "../../database/models/user";
import Address from "../../database/models/address";


const update_address = async (req:Request, res:Response) => {
    const { username,house_no,street_no,area,landmark,city,country,zip_no,status,address_type} = req.body;
     
    const userFind:any = await User.findOne({ where: { username } });

    
    const user = await Address.update({ 
        house_no, 
        street_no,
        area,
        landmark,
        city,
        country,
        zip_no,
        status,
        address_type
    }, { where: { username: userFind.username } });
   
    res.send({ Message:"update address successfully"});
  
}

export default update_address;