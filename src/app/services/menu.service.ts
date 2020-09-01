import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private state = new BehaviorSubject(false);
  private page = new BehaviorSubject('home');

  constructor() {
  }

  getState(): BehaviorSubject<boolean> {
    return this.state;
  }

  setState(value: boolean) {
    this.state.next(value);
  }

  getPage(): BehaviorSubject<string> {
    return this.page;
  }

  setPage(value: string) {
    this.page.next(value);
  }
}
