import {Injectable} from '@angular/core';
import {Lesson} from '../models/lesson.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Result} from '../models/http-response.model';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
  }

  saveLesson(lesson: Lesson): Observable<Result> {
    if (lesson._id) {
      return this.updateLesson(lesson);
    } else {
      return this.createLesson(lesson);
    }
  }

  private createLesson(lesson: Lesson) {
    return this.http.post(`${environment.api}/lessons`, lesson);
  }

  private updateLesson(lesson: Lesson) {
    if (!lesson.author) {
      lesson.author = this.userService.getLoggedInUser();
    }
    return this.http.put(`${environment.api}/lessons/${lesson._id}`, lesson);
  }

  getLessons(): Observable<Result> {
    return this.http.get(`${environment.api}/lessons`);
  }

  deleteLesson(lesson: Lesson) {
    return this.http.post(`${environment.api}/lessons/delete/${lesson._id}`, {});
  }
}
