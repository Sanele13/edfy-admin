import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IQuestion, IQuiz, Option} from '../../models/quiz.model';
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
  option: Option = {};

  selectedQuestion: IQuestion;
  selectedOption: Option;

  newQuestion: boolean;
  newOption: boolean;

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
    if (this.quiz.questions) {
      this.quiz.questions.push(this.question);
    } else {
      this.quiz.questions = [this.question];
    }
    this.quiz.questions = [...this.quiz.questions];
    this.question = {};
    this.newQuestion = false;
  }

  searchSubjects(event): void {
    this.subjectsSubscription = this.subjectsService.getSubjects(event.query).subscribe(
      subjects => {
        this.filteredSubjects = subjects;
      }
    );
  }

  saveOption(): void {
    if (this.question.options) {
      this.question.options.push(this.option);
    } else {
      this.question.options = [this.option];
    }
    this.question.options = [...this.question.options];
    this.option = {};
    this.newOption = false;
  }

  cancel() {
    this.newOption = false;
  }

  createNewOption(question: IQuestion) {
    this.question = question;
    this.newOption = true;
    this.option = {};
  }

  createNewQuestion() {
    this.newQuestion = true;
    this.question = {};
  }
}
