import {IUser} from './user.model';

export interface IQuiz {
  _id?: string;
  title?: string;
  questions?: IQuestion[];
  author?: IUser;
  date?: string;
  expiryDate?: string;
  duration?: number;
  participants?: IUser[];
  subject?: string;
  published?: boolean;
}
export class Quiz implements IQuiz {

}

export interface IQuestion {
  question?: string;
  answer?: Option[];
  options?: Option[];
  type?: string;
  selectionType?: string;
}

export interface Option {
  text?: string;
  isChecked?: boolean;
}
