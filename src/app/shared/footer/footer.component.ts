import { LocalStorageService } from './../../services/local-storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { Component,OnInit } from '@angular/core';

declare var $:any;

@Component({
    selector: 'footer-cmp',
    templateUrl: 'footer.component.html'
})

export class FooterComponent implements OnInit {
    
    protected user: any = {}
    protected date : Date = new Date();
    public stateSubscription: Subscription;

    constructor(
        private localStorageService: LocalStorageService,
        private authService: AuthService
    ) {}
    
    ngOnInit() {
        this.LoadInformationUser()
    }

    private LoadInformationUser(): void {
        this.stateSubscription = this.localStorageService.state$.subscribe(
          (newState) => {
            if(newState?.token) this.user = this.authService.getTokenInfo()
          }
        )
    
        if(Object.keys(this.user).length === 0) this.user = this.authService.getTokenInfo()
      }

}
