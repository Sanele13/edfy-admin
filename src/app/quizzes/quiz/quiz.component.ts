import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IQuestion, IQuiz, Quiz} from '../../models/quiz.model';
import {SubjectsService} from '../../services/subjects.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'edfy-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {
  displayDialog: boolean;
  question: IQuestion = {};

  selectedQuestion: IQuestion;

  newQuestion: boolean;

  @Input() quiz: IQuiz;
  filteredSubjects: any[];

  subjectsSubscription: Subscription;

  constructor(
    private subjectsService: SubjectsService
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subjectsSubscription) {
      this.subjectsSubscription.unsubscribe();
    }
  }

  saveQuestion(): void {
    console.log(this.question);
    const questions = [...this.quiz.questions];
    if (this.newQuestion) {
      questions.push(this.question);
    } else {
      questions[this.quiz.questions.indexOf(this.selectedQuestion)] = this.question;
    }

    this.quiz.questions = questions;
    this.question = null;
    this.newQuestion = false;
  }

  deleteQuestion(): void {
    const index = this.quiz.questions.indexOf(this.selectedQuestion);
    this.quiz.questions = this.quiz.questions.filter((val, i) => i != index);
    this.question = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newQuestion = false;
    this.question = this.cloneQuestion(event.data);
    this.displayDialog = true;
  }

  cloneQuestion(q: IQuestion): IQuestion {
    const question = {};
    for (const prop in q) {
      question[prop] = q[prop];
    }
    return question;
  }

  searchSubjects(event): void {
    this.subjectsSubscription = this.subjectsService.getSubjects(event.query).subscribe(
      subjects => {
        this.filteredSubjects = subjects;
      }
    );
  }
}
