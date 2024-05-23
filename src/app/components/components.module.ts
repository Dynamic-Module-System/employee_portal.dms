import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item/card-item.component';

const components = [
  CardItemComponent,
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
  ],
  exports: components
})

export class ComponentsModule { }
