import express, {
  Express,
  Request,
  Response,
  NextFunction,
} from 'express';

import { Router } from 'express';
import { Tquestion } from '../entities/question';
import answersRoutes from './answers/answers';
import {
  getAllQuestions,
  getQuestion,
  addQuestion,
  deleteQuestion,
} from '../controllers/questions';

const router = Router(); //This allow us to register middleware

router.get('/', getAllQuestions);
router.get('/:questionId', getQuestion);

router.post('/', addQuestion);

router.delete('/:id', deleteQuestion);

router.use('/:questionId/answers', answersRoutes);

export default router;
