import {Injectable} from '@angular/core';
import {IQuiz} from '../models/quiz.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Result} from '../models/http-response.model';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
  }

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
    if (!quiz.author) {
      quiz.author = this.userService.getLoggedInUser();
    }
    return this.http.put(`${environment.api}/quizzes/${quiz._id}`, quiz);
  }

  getQuizzes(): Observable<Result> {
    return this.http.get(`${environment.api}/quizzes`);
  }

  deleteQuiz(quiz: IQuiz) {
    return this.http.post(`${environment.api}/quizzes/delete/${quiz._id}`, {});
  }
}
