import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import {Result} from '../models/http-response.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(
    private http: HttpClient
  ) { }

  getSchools(name): Observable<any> {
    return this.http.get(`${environment.schoolsApiUrl}/schools/search/nameStartsWith?name=${name}`).pipe(
      map((result: Result) => result._embedded.schools)
    );
  }
}
