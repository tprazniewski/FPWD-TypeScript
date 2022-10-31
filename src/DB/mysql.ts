import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { AnswersTS } from '../models/answers';
import { QuestionsTS } from '../models/questions';

dotenv.config();
export const appDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [AnswersTS, QuestionsTS],
  synchronize: true,
});
