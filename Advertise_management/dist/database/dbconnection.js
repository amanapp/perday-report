"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('adv_test', 'postgres', 'postgres', {
    host: '192.168.2.157',
    dialect: 'postgres'
});
exports.default = sequelize;
//# sourceMappingURL=dbconnection.js.map