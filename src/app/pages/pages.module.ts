import { ComponentsModule } from './../components/components.module';
import { UserComponent } from './user/user.component';
import { RequestsComponent } from './requests/requests.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

const components = [
  HomeComponent,
  RequestsComponent,
  UserComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
