import { Injectable } from '@angular/core';
import {IQuiz} from '../models/quiz.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Result} from '../models/http-response.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private http: HttpClient
  ) { }

  saveQuiz(quiz: IQuiz): Observable<Result> {
    if (quiz._id) {
      return this.updateQuiz(quiz);
    } else {
      return this.createQuiz(quiz);
    }
  }

  private createQuiz(quiz: IQuiz) {
    return this.http.post(`${environment.api}/quizzes`, quiz);
  }

  private updateQuiz(quiz: IQuiz) {
    return this.http.put(`${environment.api}/quizzes/${quiz._id}`, quiz);
  }

  getQuizzes(): Observable<Result> {
    return this.http.get(`${environment.api}/quizzes`);
  }
}
