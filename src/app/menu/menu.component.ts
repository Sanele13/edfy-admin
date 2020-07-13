import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'edfy-admin-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activeLink = 'home';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  navigate(path: string) {
    this.activeLink = path === '' ? 'home' : path;
    this.router.navigateByUrl('/' + path);
  }
}
