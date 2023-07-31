import { Sequelize } from "sequelize";

const sequelize = new Sequelize('adv_test', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});


export default sequelize;
