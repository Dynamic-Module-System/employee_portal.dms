import { AuthService } from './../../services/auth.service';
import { LocalStorageService } from './../../services/local-storage.service';
import { ROUTES } from "./../sidebar/sidebar.component";
import { Component, OnInit, ElementRef } from "@angular/core";
import { Subscription } from 'rxjs'
import { Location, } from "@angular/common";

@Component({
  selector: "navbar-cmp",
  templateUrl: "navbar.component.html",
})
export class NavbarComponent implements OnInit {
  /* Propiedades de la plantilla */
  private listTitles: any[];
  private toggleButton: any;
  private sidebarVisible: boolean;

  /* Propiedades DMS */
  protected user: any = {}
  public stateSubscription: Subscription;

  constructor(
    /* Instancias de la plantilla */
    private location: Location,
    private element: ElementRef,
    /* Instancias DMS */
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggle")[0];
    this.LoadInformationUser();
  }

  private LoadInformationUser(): void {
    this.stateSubscription = this.localStorageService.state$.subscribe(
      (newState) => {
        if(newState?.token) this.user = this.authService.getTokenInfo()
      }
    )

    if(Object.keys(this.user).length === 0) this.user = this.authService.getTokenInfo()
  }

  /**********************************************************/
  /* Métodos de la plantilla */
  /**********************************************************/
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName("body")[0];
    setTimeout(function () {
      toggleButton.classList.add("toggled");
    }, 500);
    body.classList.add("nav-open");

    this.sidebarVisible = true;
  }

  sidebarClose() {
    const body = document.getElementsByTagName("body")[0];
    this.toggleButton.classList.remove("toggled");
    this.sidebarVisible = false;
    body.classList.remove("nav-open");
  }

  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }
}
