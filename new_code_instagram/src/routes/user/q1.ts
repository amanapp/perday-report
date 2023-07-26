import { Response,Request } from "express";
import User from '../../Database/models/user'
import post from '../../Database/models/posts'
import like from '../../Database/models/like'
import { createClient } from "redis";
const client = createClient()
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();
// Retrieve posts along with information about the users who created them and the total number of likes each post has.
export default async (req:Request, res:Response) => {

    try {
    

       const answer= await post.aggregate([
            
        { $lookup: {
          from: 'users',
          localField: 'user_id',
          foreignField: '_id',
          as: 'usersDetails'
        },},
        { $lookup: {
          from: 'likes',
          localField: '_id',
          foreignField: 'user_id',
          as: 'likeDetails'
        },},
       
           
          ])

          res.json(answer)
       
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
      }
  
}



