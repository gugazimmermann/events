import Sequelize from 'sequelize';
import dbConfig from '../config/db';
import plans from '../sequelize/models/plans';

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.plans = plans(sequelize, Sequelize);

export default db;
