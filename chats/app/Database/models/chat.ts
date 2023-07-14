import sequelize from '../dbconnection';
import { Sequelize, Model, DataTypes ,Op} from 'sequelize'

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


export default chat;
