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
import {HttpClientModule} from '@angular/common/http';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    QuizzesComponent,
    QuizComponent
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
    SplitButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
