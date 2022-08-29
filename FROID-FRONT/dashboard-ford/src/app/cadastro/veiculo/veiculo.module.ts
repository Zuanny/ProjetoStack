import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoRoutingModule } from './veiculo-routing.module';
import { MenuSuperiorModule } from '../../menu-superior/menu-superior.module';
import { VeiculoComponent } from './veiculo.component';







@NgModule({
  declarations: [VeiculoComponent],
  imports: [
    CommonModule,
    VeiculoRoutingModule,
    MenuSuperiorModule,

  ]
})
export class VeiculoModule { }
