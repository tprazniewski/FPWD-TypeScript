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
  try {
    const question = await Tquestion.find();
    return res.json(question);
  } catch (error) {
    return res
      .status(500)
      .send({ err: 'Internal server error' });
  }
};

export const getQuestion: RequestHandler = async (
  req,
  res,
) => {
  const { questionId } = req.params;
  try {
    const question = await Tquestion.findOneBy({
      id: parseInt(questionId),
    });

    return res.json(question);
  } catch (error) {
    return res
      .status(500)
      .send({ err: 'Internal server error' });
  }
};

export const addQuestion: RequestHandler = async (
  req,
  res,
) => {
  const { author, summary } = req.body;
  console.log('auth', author);
  console.log('summ', summary);
  try {
    const question = Tquestion.create({
      author,
      summary,
    });
    await question.save();
    return res.json(question);
  } catch (error) {
    return res
      .status(500)
      .send({ err: 'Internal server error' });
  }
};

export const deleteQuestion: RequestHandler = async (
  req,
  res,
) => {
  const { id } = req.params;
  try {
    const response = await Tquestion.delete(parseInt(id));
    return res.json(response);
  } catch (error) {
    return res
      .status(500)
      .send({ err: 'Internal server error' });
  }
};
