import { Response,Request } from "express";
import User from '../../Database/models/user'
import post from '../../Database/models/posts'
import like from '../../Database/models/like'
import { createClient } from "redis";
const client = createClient()
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();

export default async (req:Request, res:Response) => {

    try {
        const { user_id } = req.body;
    
        const user:any = await User.findOne({user_id:user_id});

       const answer= await post.aggregate([
            // {
            //   $match: { '_id': { $eq:user._id} }
            // },
            {
              $lookup: {
                from: 'users',
                localField: 'user_id',
                foreignField: '_id',
                as: 'users1'
              }
            },
            //{
            //   $lookup:{
            //     from: 'comments',
            //     localField: 'answers.comments',
            //     foreignField: '_id',
            //     as: 'comments'
            //   }
            // }, {
            //   $project: {
            //     title: true,
            //     content: true,
            //     createdBy: true,
            //     createdAt: true,
            //     isOwner: { $eq : ['$createdBy', currentUser] },
            //     answers: true,
            //     answers: {
            //       isOwner: { $eq : ['$createdBy', currentUser] },
            //       content: true,
            //       createdBy: true,
            //       createdAt: true,
            //       comments: {
            //         content: true,
            //         createdAt: true,
            //         createdBy: true,
            //         isOwner: { $eq : ['$createdBy', currentUser] }
            //       }
            //     }
            //   }
            // }
          ])

          res.json(answer)
       
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
      }
  
}



