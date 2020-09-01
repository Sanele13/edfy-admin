import {Component, OnInit} from '@angular/core';
import {MenuService} from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'edfy-admin';
  isMenuOpen: boolean;

  constructor(private menuService: MenuService) {}
  ngOnInit(): void {
    this.menuService.getState().subscribe(state => this.isMenuOpen = state);
  }
}

