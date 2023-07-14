import express, { Response } from 'express';
import jwt from 'jsonwebtoken';
import { Sequelize, Model, DataTypes ,Op} from 'sequelize';
import { Request } from 'express';
import { any, number } from 'joi';

const app = express();
const sequelize = new Sequelize('aman_testing', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
}


(async function (){
    
    try {

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})()


User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

User.sync({ force: true });

class Message extends Model {
    public id!: number;
    public connection_id!: string;
    public senderId!: string;
    public reciverId!: string;
}
  
  Message.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
     
      
      senderId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reciverId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      connection_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'messages',
    }
);
  
Message.sync({ force: true });

class chat extends Model {
  public id!: number;
  public connection!: string;
  public senderMessage!: string;
  public reciverMessage!: string;


}

chat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    connection: {
      type: DataTypes.STRING,
      allowNull: false,
      // references: {
      //   model: Message,
      //   key: 'id'
      // }
    },
    senderMessage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reciverMessage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },
  {
    sequelize,
    tableName: 'chat',
  }
);

chat.sync({ force: true });




app.use(express.json());
// signup
app.post('/signup', async (req:Request, res:Response) => {
  const { username, password } = req.body;
  const user = await User.create({ username, password });
  const userId = user.id;
  const token = jwt.sign({ userId }, 'secret');

});
// login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user:any = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).send({ message: 'Invalid username or password' });
    }
    if (user.password !== password) {
      return res.status(401).send({ message: 'Invalid username or password' });
    }
    const userId = user.id;
    const token = jwt.sign({ userId }, 'secret');
    res.send({ token });
  });


//   chats_connection 
app.post('/connection', async (req, res) => {
    const { senderId ,reciverId } = req.body;
     const connection_id = senderId+"ROOM"+reciverId;//salt make
     console.log(connection_id);
    const message = await Message.create({ senderId ,reciverId,connection_id});
    res.send({ message });
});

// chats
app.post('/message', async (req, res) => {
  const { connection, senderMessage ,reciverMessage } = req.body;
  const message = await chat.create({  senderMessage ,reciverMessage,connection});
  res.send({ message });
});

// get api 
app.get('/message', async (req, res) => {
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

});

//delete messages 
app.delete('/message/:id', async (req: Request, res: Response) => {
  try {
    const value:number =Number(req.params.id);
    console.log(value);
    const question = await chat.destroy({
      where: { id: value }
    });
    res.status(200).json({ "message": "chat deleted successfully !"})
   } catch (error) {
    res.status(422).json({ error })
   }
});




app.listen(3000, () => {
  console.log('Server started on port 3000');
});