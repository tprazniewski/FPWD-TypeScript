import express, {
  Express,
  Request,
  Response,
  NextFunction,
} from 'express';

import { Router } from 'express';

import { Tquestion } from '../entities/question';
import answersRoutes from './answers/answers';

const router = Router(); //This allow us to register middleware

router.get('/', (req, res) => {
  res.send({ message: 'hejloo Yacc' });
});

router.post('/', async (req, res) => {
  const { author, summary } = req.body;
  console.log('auth', author);
  console.log('summ', summary);
  const question = Tquestion.create({
    author,
    summary,
  });
  await question.save();
  return res.json(question);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await Tquestion.delete(parseInt(id));
  return res.json(response);
});

router.use('/:questionId/answers', answersRoutes);

export default router;
