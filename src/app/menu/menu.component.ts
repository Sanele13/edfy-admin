import { Component, OnInit } from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {MenuService} from '../services/menu.service';

@Component({
  selector: 'edfy-admin-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activeLink = 'home';

  constructor(
    private router: Router,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.menuService.getPage().subscribe(page => this.activeLink = page);
  }

  navigate(path: string) {
    this.activeLink = path === '' ? 'home' : path;
    this.router.navigateByUrl('/' + path);
  }
}
