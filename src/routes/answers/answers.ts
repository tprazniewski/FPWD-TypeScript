import { Router, Request, Response } from 'express';
import { Tquestion } from '../../entities/question';
import { Tanswer } from '../../entities/answer';
import {
  getAllAnswers,
  getAnswer,
  addAnswer,
} from '../../controllers/answers';
const router = Router({ mergeParams: true }); //This allow us to register middleware

router.get('/', getAllAnswers);

router.get('/:answerId', getAnswer);

router.post('/', addAnswer);

export default router;
