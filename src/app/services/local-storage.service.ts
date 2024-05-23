import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private stateSubject = new BehaviorSubject<any>(null);
  public state$: Observable<any> = this.stateSubject.asObservable();

  constructor() { }

  public GetState(): any {
    return this.stateSubject.getValue();
  }

  public SetState(newState: any, timeOut: number = 0): void {
    setTimeout(() => {
      this.stateSubject.next(newState);
    }, timeOut);
  }

  public SetLocal(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public GetLocal(key: string): string {
    return localStorage.getItem(key)
  }

  public RemoveLocal(key: string): void {
    localStorage.removeItem(key);
  }

}
