import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '',
      loadChildren: () => import('./pages/pages.module').then(x => x.PagesModule)
    },
    { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [],
})

export class AppRoutingModule { }
