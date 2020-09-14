import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ILoadingScreen} from './models/loading.model';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loader = new BehaviorSubject<ILoadingScreen>({show: false, message: ''});

  constructor() {
  }

  setShow(value: ILoadingScreen) {
    this.loader.next(value);
  }

  displayLoader(): Observable<ILoadingScreen> {
    return this.loader;
  }
}
