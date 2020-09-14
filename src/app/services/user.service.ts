import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Result} from '../models/http-response.model';
import {BehaviorSubject} from 'rxjs';
import {User} from '../models/user.model';
import {School} from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$ = new BehaviorSubject(JSON.parse(localStorage.getItem('user')));

  constructor(
    private http: HttpClient
  ) { }

  getUserByNameOrLastNameStartsWith(query: string) {
    return this.http.get(`${environment.api}/user/search?query=${query}`).pipe(
      map((result: Result) => {
        result.data.forEach((user: User) => user.fullName = `${user.name} ${user.lastName}`);
        return result.data;
      })
    );
  }

  getLoggedInUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  updateAvatar(file) {
    const data = new FormData();
    const blob = new Blob([file], {type: 'image/*'});
    data.append('file', blob, file.name);
    return this.http.post(`${environment.api}/user/update/avatar`, data);
  }

  getUser(userId: string) {
    return this.http.get(`${environment.api}/user/${userId}`).pipe(
      map((result: Result) => result.data)
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.user$.next(null);
  }

  getUsersBySchool(schools: School[]) {
    const schoolNames = schools.map(school => school.name);
    return this.http.post(`${environment.api}/user/search/bySchool`, {schools: schoolNames}).pipe(
      map((result: Result) => {
        result.data.forEach((user: User) => user.fullName = `${user.name} ${user.lastName}`);
        return result.data;
      })
    );
  }
}
