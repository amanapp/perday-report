"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbconnection_1 = __importDefault(require("../dbconnection"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fullname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
    },
    profile_pic: {
        type: sequelize_1.DataTypes.BLOB('long'),
        // allowNull: true,
    },
    mob: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: true,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    Dob: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
}, {
    sequelize: dbconnection_1.default,
    tableName: 'users',
});
User.sync({ alter: true });
exports.default = User;
//# sourceMappingURL=user.js.map