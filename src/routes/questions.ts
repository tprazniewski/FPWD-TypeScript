import express, {
  Express,
  Request,
  Response,
  NextFunction,
} from 'express';

import { Router } from 'express';
import { QuestionsController } from '../controllers/questions';

// import { getQuestions } from '../controllers/questions';

// router.get('/', getQuestions)
// router.get('/:questionId', getQuestionById)

// router.post('/', addQuestion)

// router.get('/:questionId/answers', getAnswers)

// router.post('/:questionId/answers', addAnswer)

// router.get('/:questionId/answers/:answerId', getAnswer)
const router = Router(); //This allow us to register middleware
router.get(
  '/',
  (req: Request, res: Response, next: NextFunction) => {
    const questionsController = new QuestionsController();
    questionsController.getAllQuestions();
    // res.send({
    //   message: 'You have reaved the questions route',
    // });
  },
);

router.post('/');

router.patch('/:id');

export default router;
