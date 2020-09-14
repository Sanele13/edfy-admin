import {Component, OnInit} from '@angular/core';
import {IQuiz, Quiz} from '../models/quiz.model';
import {QuizService} from '../services/quiz.service';
import {Result} from '../models/http-response.model';
import {MenuService} from '../services/menu.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class QuizzesComponent implements OnInit {
  quizView = false;
  quiz: IQuiz = {};
  quizzes: IQuiz[];
  displayQuizModal: boolean;
  items: any[];
  list1: IQuiz[] = [];
  list2: IQuiz[] = [];
  showParticipantsModal: boolean;

  constructor(
    private quizService: QuizService,
    private menuService: MenuService,
    private dialog: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.menuService.setPage('quizzes');
    this.items = [
      {
        items: [
          {
            label: 'Add Participant',
            icon: 'pi pi-fw pi-user-plus',
            command: _ => {
              this.showParticipantsModal = true;
            }
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
            command: _ => {
              this.dialog.confirm({
                message: 'Are you sure?',
                accept: () => {
                  this.deleteQuiz(this.quiz);
                }
              });
            }
          }
        ]
      }];
    this.quizService.getQuizzes().subscribe(
      res => {
        this.quizzes = res.data;
        this.list1 = this.quizzes.filter(quiz => !quiz.published);
        this.list2 = this.quizzes.filter(quiz => quiz.published);
      }
    );
  }

  createNewQuiz() {
    this.quiz = new Quiz();
    this.displayQuizModal = true;
  }

  saveQuiz() {
    this.quizService.saveQuiz(this.quiz).subscribe(
      (res: Result) => {
        //
      }
    );
  }

  cancel() {
    this.quizView = false;
    this.quiz = new Quiz();
  }

  openSettings(quiz: IQuiz) {

  }

  editQuiz(quiz: IQuiz) {
    this.quiz = Object.assign({}, quiz);
    this.displayQuizModal = true;
  }

  publishQuiz(quizzes: IQuiz[]) {
    // TODO allow publishing of multiple quizzes
    const quizToSave = quizzes[0];
    this.quizzes.find(quiz => quiz._id === quizToSave._id).published = true;
    this.quizService.saveQuiz(quizToSave).subscribe(
      res => {
        // show message
      }
    );
  }

  unpublishQuiz(quizzes: IQuiz[]) {
    // TODO allow publishing of multiple quizzes
    const quizToSave = quizzes[0];
    this.quizzes.find(quiz => quiz._id === quizToSave._id).published = false;
    this.quizService.saveQuiz(quizToSave).subscribe(
      res => {
        // show message
      }
    );
  }

  deleteQuiz(quiz: IQuiz) {
    this.quizService.deleteQuiz(quiz).subscribe((result: Result) => {
        // show message
      },
      error => {
        console.log(error);
      });
  }
}
