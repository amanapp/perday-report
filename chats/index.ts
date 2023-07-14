import express, { Response,Request } from 'express';
import login from './app/Route/login'
import signup from './app/Route/sigup'
import connection from './app/Route/chat_connection'
import chats from './app/Route/chat'
import delete_message from './app/Route/deletion';
import paggination from './app/Route/paggination';


const app = express();
app.use(express.json());



// signup
app.post('/signup',signup );

// login
app.post('/login', login);

//   chats_connection 
app.post('/connection', connection);

// chats
app.post('/message', chats);

// get paggination
app.get('/message', paggination);

//delete messages 
app.delete('/message/:id', delete_message);




app.listen(3000, () => {
  console.log('Server started on port 3000');
});