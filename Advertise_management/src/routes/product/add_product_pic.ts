import { Response,Request } from "express";
import User from "../../database/models/user";
import Product from "../../database/models/product";



const add_profile_photos = async (req:Request, res:Response) => {
   
    const { username} = req.body;

    const { originalname, buffer } = req.file;

    const userfind:any = await User.findOne({ where: { username } });
    const productSearch=await Product.findOne({ where: { user_id:userfind.id } });
    const Id=productSearch.dataValues.id;
    const productPic = await Product.update({ 
        product_pic:buffer
       
    }, { where: { id:Id  } });

    res.send({ Message:"update successfully"});
  
}

export default add_profile_photos;