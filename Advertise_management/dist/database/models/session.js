"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbconnection_1 = __importDefault(require("../dbconnection"));
class Session extends sequelize_1.Model {
}
Session.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize: dbconnection_1.default,
    tableName: 'sessions',
});
Session.sync({ alter: true });
exports.default = Session;
//# sourceMappingURL=session.js.map