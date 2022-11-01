import { appDataSource } from '../DB/mysql';
import express, { RequestHandler } from 'express';
import { Tquestion } from '../entities/question';

export class QuestionsController {
  constructor(
    private questionRepository = appDataSource.getRepository(
      Tquestion,
    ),
  ) {}
}
