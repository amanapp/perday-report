import { Sequelize, Model, DataTypes ,Op} from 'sequelize'

import sequelize from '../dbconnection';


class Session extends Model {
    public id!: number;
    public username!: string;
    public status!: boolean;
    
}
Session.init(
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
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
     
    },
    {
      sequelize,
      tableName: 'sessions',
    }
  );
  
  Session.sync({ alter: true});
  export default Session;