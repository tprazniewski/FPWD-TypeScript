//is never instantiated by tbe application is only used by typed ORM
import { Entity, ManyToOne, OneToMany } from 'typeorm';
// import { QuestionTS } from './questions';
import { Base } from './utils/baseForAnswersAndQuestions';
import { Tanswer } from './answer';

@Entity()
export class Tquestion extends Base {
  @OneToMany(
    () => Tanswer, // We are going to return
    (tanswer) => tanswer.tquestion,
  )
  tanswers: Tanswer[];
}
