import { appDataSource } from '../DB/mysql';
import express, { RequestHandler } from 'express';
import { Tquestion } from '../entities/question';

export class QuestionsController {
  constructor(
    private questionRepository = appDataSource.getRepository(
      Tquestion,
    ),
  ) {}

  // public async getAllQuestions(): Promise<QuestionsTS[]> {
  //   let allQuestions: QuestionsTS[];

  //   try {
  //     allQuestions = await this.questionRepository.find({
  //       order: {
  //         id: 'ASC',
  //       },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
}
// export const getQuestions: RequestHandler = (
//   req,
//   res,
//   next,
// ) => {
//   res
//     .status(200)
//     .send({ message: 'Welcome this is questions router' });
// };

// const addQuestion: RequestHandler = (req, res, next) => {};

// const getQuestionById: RequestHandler = (
//   req,
//   res,
//   next,
// ) => {};

// const getAnswers: RequestHandler = (req, res, next) => {};

// const addAnswer: RequestHandler = (req, res, next) => {};

// const getAnswer: RequestHandler = (req, res, next) => {};
