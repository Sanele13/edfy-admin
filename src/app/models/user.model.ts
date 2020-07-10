import {School} from './school.model';

export interface IUser {
  subjects?: any[];
  _id?: string;
  name?: string;
  lastName?: string;
  username?: string;
  fullName?: string;
  role?: string;
  email?: string;
  cellNo?: string;
  password?: string;
  passwordConfirmation?: string;
  location?: Location;
  profileImageUrl?: string;
  grade?: string;
  gender?: string;
  school?: School;
  dob?: string;
  online?: boolean;
}

export class User implements IUser {}
