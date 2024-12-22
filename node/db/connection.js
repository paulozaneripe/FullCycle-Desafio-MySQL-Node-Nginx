import mysql from 'mysql';
import { env } from 'process';

export const dbConnection = mysql.createPool({
  connectionLimit: 10,
  host: env.DB_HOST,
  port: Number(env.DB_PORT),
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
});
