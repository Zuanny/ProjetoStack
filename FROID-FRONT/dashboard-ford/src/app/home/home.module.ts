import { CardModule } from './../componentes/card/card.module';
import { MenuSuperiorModule } from './../menu-superior/menu-superior.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenuSuperiorModule,
    CardModule
  ]
})
export class HomeModule { }
