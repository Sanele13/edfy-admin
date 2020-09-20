import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {ToolbarModule} from 'primeng/toolbar';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import { QuizzesComponent } from './quizzes/quizzes.component'
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';
import {EditorModule} from 'primeng/editor';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PanelModule} from 'primeng/panel';
import {ConfirmationService, ConfirmDialogModule, MenuModule, PickListModule, SidebarModule, SplitButtonModule} from 'primeng/primeng';
import { ParticipantsModalComponent } from './quizzes/participants-modal/participants-modal.component';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from 'primeng/password';
import {AuthInterceptor} from './http-interceptor';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonComponent } from './lessons/lesson/lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    QuizzesComponent,
    QuizComponent,
    ParticipantsModalComponent,
    LoginComponent,
    LessonsComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TieredMenuModule,
    ToolbarModule,
    ButtonModule,
    TabViewModule,
    InputTextModule,
    DialogModule,
    TableModule,
    FormsModule,
    AccordionModule,
    EditorModule,
    AutoCompleteModule,
    PanelModule,
    SplitButtonModule,
    MenuModule,
    PickListModule,
    SidebarModule,
    PasswordModule,
    ConfirmDialogModule,
    InputSwitchModule,
    ScrollPanelModule
  ],
  providers: [ConfirmationService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
