import {Component, OnInit} from '@angular/core';
import {Lesson} from '../models/lesson.model';
import {LessonService} from '../services/lesson.service';
import {Result} from '../models/http-response.model';
import {MenuService} from '../services/menu.service';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'edfy-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  lessonView = false;
  lesson: Lesson = new Lesson();
  lessons: Lesson[];
  displayLessonModal: boolean;
  items: any[];
  list1: Lesson[] = [];
  list2: Lesson[] = [];
  showParticipantsModal: boolean;

  constructor(
    private lessonService: LessonService,
    private menuService: MenuService,
    private dialog: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.menuService.setPage('lessons');
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
                  this.deleteLesson(this.lesson);
                }
              });
            }
          }
        ]
      }];
    this.lessonService.getLessons().subscribe(
      res => {
        this.lessons = res.data;
        this.list1 = this.lessons.filter(lesson => !lesson.published);
        this.list2 = this.lessons.filter(lesson => lesson.published);
      }
    );
  }

  createNewLesson() {
    this.lesson = new Lesson();
    this.displayLessonModal = true;
  }

  saveLesson() {
    this.lessonService.saveLesson(this.lesson).subscribe(
      (res: Result) => {
        //
      }
    );
  }

  cancel() {
    this.lessonView = false;
    this.lesson = new Lesson();
  }

  openSettings(lesson: Lesson) {

  }

  editLesson(lesson: Lesson) {
    this.lesson = Object.assign({}, lesson);
    this.displayLessonModal = true;
  }

  publishLesson(lessons: Lesson[]) {
    // TODO allow publishing of multiple lessonzes
    const lessonToSave = lessons[0];
    this.lessons.find(lesson => lesson._id === lessonToSave._id).published = true;
    this.lessonService.saveLesson(lessonToSave).subscribe(
      res => {
        // show message
      }
    );
  }

  unpublishLesson(lessonzes: Lesson[]) {
    // TODO allow publishing of multiple lessonzes
    const lessonToSave = lessonzes[0];
    this.lessons.find(lesson => lesson._id === lessonToSave._id).published = false;
    this.lessonService.saveLesson(lessonToSave).subscribe(
      res => {
        // show message
      }
    );
  }

  deleteLesson(lesson: Lesson) {
    this.lessonService.deleteLesson(lesson).subscribe((result: Result) => {
        // show message
      },
      error => {
        console.log(error);
      });
  }

  log() {
    console.log(this.lesson);
  }
}
