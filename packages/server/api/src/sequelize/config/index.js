import * as dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'development';
const envFile =
  env === 'production'
    ? '.env.production'
    : env === 'test'
    ? '.env.test'
    : '.env.development';

dotenv.config({ path: `../../../../${envFile}` });

const conf = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql',
};

const config = {
  [env]: { ...conf, logging: env === 'production' ? false : true },
};

export default config;
