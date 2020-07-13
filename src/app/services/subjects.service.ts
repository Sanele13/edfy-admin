import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Result} from '../models/http-response.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(
    private http: HttpClient
  ) { }

  getSubjects(query: string): Observable<any> {
    return this.http.get(`${environment.api}/subjects/search?query=${query}`).pipe(
      map((result: Result) => result.data)
    );
  }
}
