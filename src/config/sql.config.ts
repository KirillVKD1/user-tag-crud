export default {
  client: process.env.SQL_TYPE || 'pg',
  connection: {
    host: process.env.SQL_HOST || 'localhost',
    port: Number(process.env.SQL_PORT) || 5432,
    user: process.env.SQL_USERNAME || 'root',
    password: process.env.SQL_PASSWORD || 'root',
    database: process.env.SQL_DBNAME || 'dev_clicksua',
    logging: process.env.SQL_LOGGING
      ? JSON.parse(process.env.SQL_LOGGING)
      : false,
  },
  pool: {
    min: 1,
    max: 20,
  },
  migrations: {
    tableName: 'migrations',
  },
};
