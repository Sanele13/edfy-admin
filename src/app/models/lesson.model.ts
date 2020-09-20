import {User} from './user.model';
import {IQuestion, IQuiz} from './quiz.model';

export class Lesson {
  _id: string;
  title: string;
  author: User;
  shortDescription: string;
  longDescription?: string;
  participants: User[];
  content: string[];
  questions?: IQuestion[];
  quizzes?: IQuiz[];
  tutorials?: any[];
  subject: string;
  published: boolean;
}
