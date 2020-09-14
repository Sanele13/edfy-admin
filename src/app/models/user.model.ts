import {School} from './school.model';

export class User {

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

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

export class Location {
  city?: string;
  province?: string;
}
