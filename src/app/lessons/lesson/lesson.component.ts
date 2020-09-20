import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SubjectsService} from '../../services/subjects.service';
import {Subscription} from 'rxjs';
import {Lesson} from '../../models/lesson.model';

@Component({
  selector: 'edfy-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit, OnDestroy {

  @Input() lesson: Lesson;
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

  searchSubjects(event): void {
    this.subjectsSubscription = this.subjectsService.getSubjects(event.query).subscribe(
      subjects => {
        this.filteredSubjects = subjects;
      }
    );
  }
}
