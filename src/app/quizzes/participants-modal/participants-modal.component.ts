import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Location, User} from '../../models/user.model';
import {School} from '../../models/school.model';
import {IQuiz} from '../../models/quiz.model';
import {UserService} from '../../services/user.service';
import {SchoolService} from '../../services/school.service';


class Participants {
  school?: string;
  participants?: User[];
}

@Component({
  selector: 'edfy-participants-modal',
  templateUrl: './participants-modal.component.html',
  styleUrls: ['./participants-modal.component.scss']
})
export class ParticipantsModalComponent implements OnInit, OnChanges {
  @Input() showParticipantsModal: boolean;
  @Input() quiz: IQuiz;
  filteredUsers: User[];
  user: User;
  @Output() hide = new EventEmitter();
  filteredSchools: School[];
  schools: School[];
  participants: User[];
  @Output() onSave = new EventEmitter<boolean>();
  filterBySchool: boolean;
  participantSortedBySchools: Participants[] = [];

  constructor(
    private userService: UserService,
    private schoolService: SchoolService
  ) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.quiz && changes.quiz.currentValue && changes.quiz.currentValue.participants) {
      this.participants = this.quiz.participants;
      this.participants.forEach((user: User) => user.fullName = `${user.name} ${user.lastName}`);
    }
  }

  searchUsers(event: any) {
    this.userService.getUserByNameOrLastNameStartsWith(event.query).subscribe(users => {
      this.filteredUsers = users;
    });
  }

  saveParticipants() {
    if (this.quiz.published) {
      this.onSave.emit(true);
    }
  }

  hideModal() {
    this.hide.emit();
  }

  searchSchools(event: any) {
    this.schoolService.getSchools(event.query).subscribe(data => {
      this.filteredSchools = data;
    });
  }

  addParticipant(value: User) {
    this.quiz.participants.push(value);
    this.user = null;
  }

  removeParticipant(user: User) {
    this.quiz.participants = [...this.quiz.participants.filter(participant => participant._id !== user._id)];
    if (this.quiz.published) {
      this.onSave.emit(true);
    }
  }

  private getLocation(location: Location): string {
    if (location) {
      return `${location.city}, ${location.province}`;
    } else {
      return '';
    }
  }

  searchBySchools() {
    if (this.schools && this.schools.length > 0) {
      this.userService.getUsersBySchool(this.schools).subscribe((users: User[]) => {
        this.schools.forEach(school => this.participantSortedBySchools.push({school: school.name, participants: []}));
        users.forEach(user => {
          const school = this.participantSortedBySchools.find(s => s.school === user.school);
          if (school) {
            school.participants.push(user);
          }
        });
      });
    }
  }

  getParticipantsFromSchool(name: string): User[] {
    const school = this.participantSortedBySchools.find(el => el.school === name);
    if (school) {
      return school.participants;
    } else {
      return [];
    }
  }
}
