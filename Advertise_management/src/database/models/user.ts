import { Sequelize, Model, DataTypes ,Op} from 'sequelize'

import sequelize from '../dbconnection';


class User extends Model {
    public id!: number;
    public username!: string;
    public fullname!: string;
    public email!:string;
    public password!: string;
    public status!: boolean;
    public profile_pic!: Blob;
    public mob!: bigint;
    public gender!: string;
    public Dob!: Date;
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
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,

      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      profile_pic: {
        type: DataTypes.BLOB('long'),
        // allowNull: true,
      },
      mob: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Dob: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      
    },
    {
      sequelize,
      tableName: 'users',
    }
  );
  
  User.sync({ alter: true});
  export default User;