import express, {  } from 'express';
import { connection } from './src/Database/dbconnection';
import User from './src/Database/models/user'
import Like from './src/Database/models/like'
import Post from './src/Database/models/posts'
import Session  from './src/Database/models/session';
import Comment from './src/Database/models/comment'
import signup from './src/routes/user/signup';
import getUser from './src/routes/user/getUser';

import login from './src/routes/user/login';
import session from './src/routes/session/info.seesion';
import verifyToken from './src/middleware/auth'
import swaggerUiExpress from 'swagger-ui-express';



// post 
import post from './src/routes/posts/post.info'
import postcomment from './src/routes/comments/comment.info'
import postlike from './src/routes/likes/likes.info'

//joi validation acesss from the middleware
import { signUpJoiMiddleware,loginJoiMiddleware,addPostJoiMiddleware,likeJoiMiddleware,commentJoiMiddleware,sessionJoiMiddleware } from './src/middleware/joi_validation';




const app = express();
app.use(express.json());



//swagger implementation
app.use('/api-docs',swaggerUiExpress.serve, swaggerUiExpress.setup(require('./swagger.json')));
// get users detail of sign up 
app.get('/getuser',verifyToken,getUser)

// sign up 
app.post('/signup',signUpJoiMiddleware,signup)
// login 
app.post('/login',loginJoiMiddleware,login)
//session
app.post('/session',sessionJoiMiddleware,verifyToken,session)
// post
app.post('/post',addPostJoiMiddleware,verifyToken ,post)
// post comments
app.post('/post/comment',commentJoiMiddleware,verifyToken ,postcomment)
// post likes 
app.post('/post/like',likeJoiMiddleware,verifyToken ,postlike)



app.listen(3000, async() => {
 console.log('Server started on port 3000');
 
// database initiate process
    await connection();
    await User;
    await Like;
    await Post;
    await Session;
    await Comment;

});