import Sequelize from 'sequelize';

 export const sequelize = new Sequelize('ejemplo_blog', 'node', '123456', {
    host:'localhost',
    dialect: 'postgres'
})
