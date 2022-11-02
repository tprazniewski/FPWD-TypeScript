import { RequestHandler, Request, Response } from 'express';
import { Tquestion } from '../entities/question';
import { Tanswer } from '../entities/answer';

export const getAllAnswers = async (
  req: Request<{ questionId: string }>,
  res: Response,
) => {
  const { questionId } = req.params;
  const answer = await Tanswer.find({
    where: {
      tquestion: {
        id: parseInt(questionId),
      },
    },
  });
  res.send(answer);
};

export const getAnswer = async (
  req: Request<{ questionId: string; answerId: string }>,
  res: Response,
) => {
  const { questionId, answerId } = req.params;
  console.log('answer', answerId);
  console.log('question', questionId);
  const answer = await Tanswer.findOne({
    where: [
      {
        tquestion: {
          id: parseInt(questionId),
        },
        id: parseInt(answerId),
      },
    ],
  });
  res.send(answer);
};

export const addAnswer = async (
  req: Request<{ questionId: string }>,
  res: Response,
) => {
  const { questionId } = req.params;
  const { author, summary } = req.body;
  const tquestion = await Tquestion.findOneBy({
    id: parseInt(questionId),
  });
  if (!tquestion) {
    return res.send({
      message:
        'Oh Shi..... there is no Question for this id',
    });
  }

  const answer = await Tanswer.create({
    author,
    summary,
    tquestion,
  });
  answer.save();
  return res.send({ answer });
};
