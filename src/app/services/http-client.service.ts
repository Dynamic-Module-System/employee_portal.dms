import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor() { }

  public redirectToLogin(): void {
    const location: string[] = window.location.origin.split('.')
    window.location.href = `${location[0]}${environment.oAuth}?redirectTo=${location[0]}.${location[1]}.${location[2]}` 
  }

}
