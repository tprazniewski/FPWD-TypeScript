//is never instantiated by tbe application is only used by typed ORM
import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Tquestion } from './question';
import { Base } from './utils/baseForAnswersAndQuestions';

@Entity()
export class Tanswer extends Base {
  @ManyToOne(
    () => Tquestion, // We are going to return
    (tquestion) => tquestion.tanswers,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({
    name: 'tquestion_id',
  })
  tquestion: Tquestion;
}
