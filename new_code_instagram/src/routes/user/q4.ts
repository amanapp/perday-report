import { Response,Request } from "express";
import User from '../../Database/models/user'
import post from '../../Database/models/posts'
import like from '../../Database/models/like'
import { createClient } from "redis";
const client = createClient()
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();
// Find the number of comments for each post and sort the results in descending order.
export default async (req:Request, res:Response) => {

    try {
        
       const answer= await post.aggregate([{
             
        $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "user_id",
            as: "postDetails"
          }
          
         }]).sort({"_id":-1})

          res.json(answer)
       
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
      }
  
}



