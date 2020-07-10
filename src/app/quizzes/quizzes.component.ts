import { Component, OnInit } from '@angular/core';
import {IQuiz, Quiz} from '../models/quiz.model';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {
  quizView = false;
  newQuiz: IQuiz;

  constructor() { }

  ngOnInit() {
  }

  createNewQuiz() {
    this.newQuiz = new Quiz();
    this.quizView = true;
  }

  saveQuiz() {
    console.log(this.newQuiz);
  }

  cancel() {
    this.quizView = false;
    this.newQuiz = new Quiz();
  }
}
