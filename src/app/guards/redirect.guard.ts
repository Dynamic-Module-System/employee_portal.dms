import { HttpClientService } from './../services/http-client.service';
import { LocalStorageService } from './../services/local-storage.service'
import { environment } from './../../environments/environment'
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router'
import { Observable, firstValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService, 
    private httpClientService: HttpClientService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      const token: string = route.queryParams[environment.token]
      
      if (token.isNotNullOrEmpty()) {
        this.localStorageService.SetLocal(environment.jwtToken, token)
        this.localStorageService.SetState(
        {
          "token": this.localStorageService.GetLocal(environment.jwtToken)
        })
        return false
      }

      this.httpClientService.redirectToLogin()
      return false
  }
  
}
