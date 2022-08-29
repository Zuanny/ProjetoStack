import { MenuSuperiorModule } from './../menu-superior/menu-superior.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashCarroComponent } from './dash-carro/dash-carro.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashCarroComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenuSuperiorModule,
    FormsModule
  ]
})
export class DashboardModule { }
