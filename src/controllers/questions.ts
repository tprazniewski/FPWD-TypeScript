import express, {
  RequestHandler,
  Express,
  Request,
  Response,
  NextFunction,
} from 'express';
import { Tquestion } from '../entities/question';

export const getAllQuestions = async (
  req: Request,
  res: Response,
) => {
  const question = await Tquestion.find();

  return res.json(question);
};

export const getQuestion: RequestHandler = async (
  req,
  res,
) => {
  const { questionId } = req.params;
  const question = await Tquestion.findOneBy({
    id: parseInt(questionId),
  });

  return res.json(question);
};

export const addQuestion: RequestHandler = async (
  req,
  res,
) => {
  const { author, summary } = req.body;
  console.log('auth', author);
  console.log('summ', summary);
  const question = Tquestion.create({
    author,
    summary,
  });
  await question.save();
  return res.json(question);
};

export const deleteQuestion: RequestHandler = async (
  req,
  res,
) => {
  const { id } = req.params;
  const response = await Tquestion.delete(parseInt(id));
  return res.json(response);
};
