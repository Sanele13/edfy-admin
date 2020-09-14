import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(user: User) {
    return this.http.post(`${environment.api}/auth/login`, user, {observe: 'response'});
  }
}
