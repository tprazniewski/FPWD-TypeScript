import express, {
  Express,
  Request,
  Response,
  NextFunction,
} from 'express';

import { Router } from 'express';

import { Tquestion } from '../entities/question';

const router = Router(); //This allow us to register middleware

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

export default router;
