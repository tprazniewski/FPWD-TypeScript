// const express = require('express')
import express, {
  Request,
  Response,
  NextFunction,
} from 'express';
import questionRoutes from './routes/questions';
import { appDataSource } from './DB/mysql';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.get('/', (_, res) => {
  res.status(200).json({ message: 'Welcome to FPWD!' });
});

app.use('/questions', questionRoutes);

app.use(
  (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    res.status(500).json({ message: err.message });
  },
);
appDataSource
  .initialize()
  .then(() => {
    app.listen(PORT);
    console.log('Data has been initilized!');
  })
  .catch((err) => {
    console.error('error During Db init', err);
  });
