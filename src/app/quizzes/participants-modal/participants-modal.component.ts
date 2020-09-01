import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {IUser} from '../../models/user.model';
import {School} from '../../models/school.model';
import {IQuiz} from '../../models/quiz.model';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'edfy-participants-modal',
  templateUrl: './participants-modal.component.html',
  styleUrls: ['./participants-modal.component.scss']
})
export class ParticipantsModalComponent implements OnInit, OnChanges {
  @Input() showParticipantsModal: boolean;
  @Input() quiz: IQuiz;
  filteredUsers: IUser[];
  user: IUser;
  @Output() hide = new EventEmitter();
  filteredSchools: School[];
  school: School;
  searchBy = 'name';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  searchUsers(event: any) {
    this.userService.getUserByNameOrLastNameStartsWith(event.query).subscribe(users => {
      this.filteredUsers = users;
    });
  }

  addParticipants() {

  }

  cancel() {

  }

  hideModal() {
    this.hide.emit();
  }

  searchSchools(event: any) {

  }

  addParticipant(value: IUser) {
    this.quiz.participants.push(value);
  }

  removeParticipant(user: IUser) {
    this.quiz.participants = this.quiz.participants.filter(participant => participant._id !== user._id);
  }
}
