import { Sequelize } from "sequelize";

const sequelize = new Sequelize('adv_test', 'postgres', 'postgres', {
    host: '192.168.2.157',
    dialect: 'postgres'
});


export default sequelize;
