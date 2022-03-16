import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('shopsRusDb', 'user', 'password', {
    dialect: 'sqlite',
    host: './dev.sqlite'
});

export default sequelize;