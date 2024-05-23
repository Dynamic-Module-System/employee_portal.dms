import { environment } from './../../environments/environment';
import { LocalStorageService } from './../services/local-storage.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageResolver implements Resolve<boolean> {

  constructor(private localStorageService: LocalStorageService, private router: Router,) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.localStorageService.RemoveLocal(environment.jwtToken)
    window.location.reload()
    return of(false)
  }
}
