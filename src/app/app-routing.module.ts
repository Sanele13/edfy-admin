import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quizzes/quiz/quiz.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: 'quizzes',
    component: QuizzesComponent,
    children: [
      {
        path: ':id',
        component: QuizComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
