import { Component, OnInit } from '@angular/core';
import {IQuiz, Quiz} from '../models/quiz.model';
import {QuizService} from '../services/quiz.service';
import {Result} from '../models/http-response.model';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {
  quizView = false;
  quiz: IQuiz;
  quizzes: IQuiz[];

  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.quizService.getQuizzes().subscribe(
      res => this.quizzes = res.data
    );
  }

  createNewQuiz() {
    this.quiz = new Quiz();
    this.quizView = true;
  }

  saveQuiz() {
    this.quizService.saveQuiz(this.quiz).subscribe(
      (res: Result) => {
        this.quiz = res.data;
      }
    );
  }

  cancel() {
    this.quizView = false;
    this.quiz = new Quiz();
  }
}
