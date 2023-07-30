import { Response,Request } from "express";
import User from '../../Database/models/user'
import post from '../../Database/models/posts'
import like from '../../Database/models/like'
import { createClient } from "redis";
const client = createClient()
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();

// Retrieve user sessions along with information about the user, including the login time for each session.

export default async (req:Request, res:Response) => {

    try {
        
       const answer= await User.aggregate([{
             
        $lookup: {
            from: "sessions",
            localField: "_id",
            foreignField: "user_id",
            as: "sessionDetails"
          }
 }])
         
          res.json(answer)
       
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
      }
  
}



