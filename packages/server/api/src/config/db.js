import { env } from 'custom-env';
env();

const db = {
  HOST: process.env.MYSQL_HOST || '',
  PORT: process.env.MYSQL_PORT || '',
  DATABASE: process.env.MYSQL_DATABASE || '',
  USER: process.env.MYSQL_USER || '',
  PASSWORD: process.env.MYSQL_PASSWORD || '',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

console.log(db)

export default db;
