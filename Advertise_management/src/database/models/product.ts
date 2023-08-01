import { Sequelize, Model, DataTypes ,Op} from 'sequelize'

import sequelize from '../dbconnection';
import User from './user';
import Category from './categries';
import Address from './address';


class Product extends Model {
    public id!: number;
    public product_name!: string;
    public description!: string;
    public product_pic!:Blob;
    public bidding!: number;
    // public bidding_id!: string;
    public base_price!:number;
    public title!: string;
    public user_id!: number;
    public categries_id!: number;
    public address_id!: number;
}

Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      product_name: {
        type: DataTypes.STRING,
        
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      product_pic: {
        type: DataTypes.BLOB('long'),
        allowNull: false,

      },
      bidding: {
        type: DataTypes.INTEGER,
        defaultValue:null,
      },
     
      // bidding_id: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      base_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
     title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        // allowNull: true,
        references:{
            model:User,
            key:"id",
          }
      },
      categries_id:{
        type: DataTypes.INTEGER,
        // allowNull: true,
        references:{
            model:Category,
            key:"id",
          }
      },
       address_id:{
        type: DataTypes.INTEGER,
        // allowNull: true,
        references:{
            model:Address,
            key:"id",
          }
      }
    },
    {
      sequelize,
      tableName: 'products',
    }
  );
  Product.belongsTo(User,
    {
      foreignKey:"user_id",
    })

    Product.belongsTo(Category,
        {
          foreignKey:"categries_id",
        })

    Product.belongsTo(Address,
            {
              foreignKey:"address_id",
            })
        
  Product.sync({ alter: true});
  export default Product;