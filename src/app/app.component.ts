import { environment } from './../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';
import { Component, OnInit } from "@angular/core";
import { LocationStrategy, PlatformLocation, Location } from "@angular/common";
import { firstValueFrom } from 'rxjs'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  
  constructor(private localStorageService: LocalStorageService, private route: ActivatedRoute,) {}

  ngOnInit() { }

}
