import { Component, OnInit } from '@angular/core';
import {Result} from '../models/http-response.model';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {LoadingService} from '../loading.service';
import {AuthService} from '../auth.service';
import {ConfirmationService} from 'primeng/api';
import {User} from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService,
    private userService: UserService,
    private dialog: ConfirmationService
  ) {}

  ngOnInit() {
  }

  login() {
    this.loadingService.setShow({show: true, message: 'Logging in...'});
    const user = new User(this.username, this.password);
    this.authService.login(user).subscribe(
      response => {
        console.log(response);
        this.loadingService.setShow({show: false, message: ''});
        const result: Result = response.body as Result;
        if (!result.error) {
          localStorage.setItem('user', JSON.stringify(result.data));
          localStorage.setItem('x-access-token', response.headers.get('x-access-token'));
          this.userService.user$.next(result.data);
          this.router.navigate(['/']);
        } else {
          this.dialog.confirm({
            message: result.error,
            accept: () => {

            }
          });
        }
      }
    );
  }

}
