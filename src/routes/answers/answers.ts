import { Router, Request, Response } from 'express';
import { Tquestion } from '../../entities/question';
import { Tanswer } from '../../entities/answer';
import { appDataSource } from '../../DB/mysql';

const router = Router({ mergeParams: true }); //This allow us to register middleware

router.get(
  '/',
  async (req: Request<{ questionId: string }>, res) => {
    // const useRepo = appDataSource.getRepository(Tanswer);
    // const answ = useRepo.find({ tquestion_id: 1 });
    const { questionId } = req.params;
    const tquestion = await Tquestion.find({
      relations: ['tanswer'],
    });
    const answers = Tanswer.findOneBy({});
  },
);

router.post(
  '/',
  async (req: Request<{ questionId: string }>, res) => {
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
  },
);

export default router;
