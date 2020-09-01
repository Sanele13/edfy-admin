import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Result} from '../models/http-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUserByNameOrLastNameStartsWith(query: string) {
    return this.http.get(`${environment.api}/user/search?query=${query}`).pipe(
      map((result: Result) => result.data.map(el => el.name))
    );
  }
}
