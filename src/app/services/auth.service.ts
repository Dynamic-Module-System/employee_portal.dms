import { environment } from './../../environments/environment';
import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localStorageService: LocalStorageService) { }
  
  public getTokenInfo(): any {
    const token = this.localStorageService.GetLocal(environment.jwtToken)
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    debugger
    return decodedToken
  }
}
