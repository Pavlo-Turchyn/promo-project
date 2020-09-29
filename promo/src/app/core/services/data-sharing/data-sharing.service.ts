import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class DataSharingService {
  private catDataSubject = new BehaviorSubject<string>(null);

  constructor() {}

  get catDataObservable(): Observable<string> {
    return this.catDataSubject.asObservable();
  }
  emitCatDataChange(data: string): void {
    this.catDataSubject.next(data);
  }
}
