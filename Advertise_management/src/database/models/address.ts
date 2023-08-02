import { Sequelize, Model, DataTypes ,Op} from 'sequelize'

import sequelize from '../dbconnection';
import User from './user';


class Address extends Model {
    public id!: number;
    public user_id!:number;
    public house_no!:string;
    public street_no!:number;
    public area!:string;
    public landmark!:string;
    public city!:string;
    public country!:string;
    public zip_no!:number;
    public status!:boolean;
    public address_type:string;
    
}
Address.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
          model:User,
          key:"id",
        }
      },
      house_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      landmark: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      address_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'address',
    }
  );
  
  Address.sync({ alter: true });
  Address.belongsTo(User,
    {
      foreignKey:"user_id",
    })
  export default Address;