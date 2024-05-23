import { LocalStorageResolver } from './resolver/local-storage.resolver';
import { RedirectGuard } from './guards/redirect.guard';
import { AuthGuard } from './guards/auth.guard';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [RedirectGuard],
  },  
  {
    path: 'logout',
    resolve: [LocalStorageResolver],
  },  
  { 
    path: '',
    loadChildren: () => import('./pages/pages.module').then(x => x.PagesModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
