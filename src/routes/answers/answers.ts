import { Router, Request, Response } from 'express';
import { Tquestion } from '../../entities/question';
import { Tanswer } from '../../entities/answer';

const router = Router({ mergeParams: true }); //This allow us to register middleware

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
