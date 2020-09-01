import { Component, OnInit } from '@angular/core';
import {MenuService} from '../services/menu.service';

@Component({
  selector: 'edfy-admin-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuService.setState(true);
  }
}
