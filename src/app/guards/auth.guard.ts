import { HttpClientService } from './../services/http-client.service';
import { environment } from './../../environments/environment';
import { LocalStorageService } from './../services/local-storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private localStorageService: LocalStorageService,
    private httpClientService: HttpClientService,
    private router: Router,
    private route: ActivatedRoute,
  ) { debugger}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      debugger
      if(!!this.localStorageService.GetLocal(environment.jwtToken)) return true
      this.httpClientService.redirectToLogin()
      return false
  }
  
}
