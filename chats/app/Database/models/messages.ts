import { Sequelize, Model, DataTypes ,Op} from 'sequelize'

import sequelize from '../dbconnection';

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
export default Message;