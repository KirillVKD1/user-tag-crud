import * as dotenv from 'dotenv';
import { Knex } from 'knex';
import * as path from 'path';
dotenv.config({ path: '../.env' });

const knexConfig: Knex.Config = {
  client: process.env.SQL_TYPE || 'pg',
  connection: {
    host: process.env.SQL_HOST || 'localhost',
    port: Number(process.env.SQL_PORT) || 5432,
    user: process.env.SQL_USERNAME || 'root',
    password: process.env.SQL_PASSWORD || 'root',
    database: process.env.SQL_DBNAME || 'dev_clicksua',
    debug: process.env.SQL_LOGGING === 'true',
  },
  pool: {
    min: 1,
    max: 20,
  },
  migrations: {
    tableName: 'migrations',
    directory: path.resolve(__dirname, './migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, './seeds'),
  },
};

export default knexConfig;
