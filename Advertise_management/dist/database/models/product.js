"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbconnection_1 = __importDefault(require("../dbconnection"));
const user_1 = __importDefault(require("./user"));
const categries_1 = __importDefault(require("./categries"));
const address_1 = __importDefault(require("./address"));
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    product_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    product_pic: {
        type: sequelize_1.DataTypes.BLOB('long'),
        allowNull: false,
    },
    bidding: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: null,
    },
    // bidding_id: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    base_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        // allowNull: true,
        references: {
            model: user_1.default,
            key: "id",
        }
    },
    categries_id: {
        type: sequelize_1.DataTypes.INTEGER,
        // allowNull: true,
        references: {
            model: categries_1.default,
            key: "id",
        }
    },
    address_id: {
        type: sequelize_1.DataTypes.INTEGER,
        // allowNull: true,
        references: {
            model: address_1.default,
            key: "id",
        }
    }
}, {
    sequelize: dbconnection_1.default,
    tableName: 'products',
});
Product.belongsTo(user_1.default, {
    foreignKey: "user_id",
});
Product.belongsTo(categries_1.default, {
    foreignKey: "categries_id",
});
Product.belongsTo(address_1.default, {
    foreignKey: "address_id",
});
Product.sync({ alter: true });
exports.default = Product;
//# sourceMappingURL=product.js.map