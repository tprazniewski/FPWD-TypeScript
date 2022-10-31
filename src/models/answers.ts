//is never instantiated by tbe application is only used by typed ORM
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity()
export class AnswersTS {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  author: string;

  @Column({
    type: 'text',
  })
  summary: string;
}
