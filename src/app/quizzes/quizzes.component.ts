import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {
  display: boolean;

  constructor() { }

  ngOnInit() {
  }

  createNewQuiz() {
    this.display = true;
  }

  saveQuiz() {
    console.log('Save quiz');
  }
}
