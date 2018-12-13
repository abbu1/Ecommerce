import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  loaderStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  public getLoaderStatus(): Observable<boolean> {

      return this.loaderStatus;

  }

  public setLoaderStatus(x: boolean) {

      this.loaderStatus.emit(x);

  }
  constructor() { }
}
