import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {SubjectsService} from '../../services/subjects.service';
import {Subscription} from 'rxjs';
import {Lesson} from '../../models/lesson.model';

@Component({
  selector: 'edfy-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit, OnChanges, OnDestroy {

  @Input() lesson: Lesson;
  filteredSubjects: any[];
  content: string;

  subjectsSubscription: Subscription;
  editing = false;

  constructor(
    private subjectsService: SubjectsService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
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

  changeContent() {
    this.editing = !this.editing;
    this.lesson.content = this.lesson.content.replace(/"ql-formula"/gm, '"ql-formulax"');
  }
}
