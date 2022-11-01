import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { Tanswer } from '../entities/answer';
import { Tquestion } from '../entities/question';

dotenv.config();
export const appDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Tanswer, Tquestion],
  synchronize: true,
});
