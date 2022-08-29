import { RouterModule } from '@angular/router';

import { MenuSuperiorComponent } from './menu-superior.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MenuSuperiorComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuSuperiorComponent
  ]
})
export class MenuSuperiorModule { }
