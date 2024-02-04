require('dotenv').config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_DATABASE,
  DB_PORT,
  DB_DIALECT = 'postgres',
  DB_USER_TSG,
  DB_PASSWORD_TSG,
  DB_DATABASE_TSG,
  DB_HOST_TSG,
  DB_PORT_TSG,
  DB_USER_AJ,
  DB_PASSWORD_AJ,
  DB_DATABASE_AJ,
  DB_HOST_AJ,
  DB_PORT_AJ,


} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
  },
  stagging: {
    username: DB_USER_TSG,
    password: DB_PASSWORD_TSG,
    database: DB_DATABASE_TSG,
    host: DB_HOST_TSG,
    port: DB_PORT_TSG,
    dialect: DB_DIALECT,
  },
  production: {
    username: DB_USER_AJ,
    password: DB_PASSWORD_AJ,
    database: DB_DATABASE_AJ,
    host: DB_HOST_AJ,
    port: DB_PORT_AJ,
    dialect: DB_DIALECT,
  },
};