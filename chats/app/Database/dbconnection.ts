import { Sequelize } from "sequelize";

const sequelize = new Sequelize('aman_testing', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});
export default sequelize;

