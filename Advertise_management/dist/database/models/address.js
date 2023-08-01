"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbconnection_1 = __importDefault(require("../dbconnection"));
const user_1 = __importDefault(require("./user"));
class Address extends sequelize_1.Model {
}
Address.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: user_1.default,
            key: "id",
        }
    },
    house_no: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    street_no: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    area: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    landmark: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    zip_no: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    address_type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: dbconnection_1.default,
    tableName: 'address',
});
Address.sync({ alter: true });
Address.belongsTo(user_1.default, {
    foreignKey: "user_id",
});
exports.default = Address;
//# sourceMappingURL=address.js.map