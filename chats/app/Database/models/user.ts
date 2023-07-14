import { Sequelize, Model, DataTypes ,Op} from 'sequelize'

import sequelize from '../dbconnection';


class User extends Model {
    public id!: number;
    public username!: string;
    public password!: string;
}
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
  export default User;