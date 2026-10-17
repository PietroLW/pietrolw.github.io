import { Sequelize } from "sequelize";

export const conn = new Sequelize('portfolio_db', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql'
})