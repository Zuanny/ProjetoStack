import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSuperiorModule } from '../../menu-superior/menu-superior.module';
import { VeiculoModeloRoutingModule } from './veiculo-modelo-routing.module';
import { VeiculoModeloComponent } from './veiculo-modelo.component';





@NgModule({
  declarations: [VeiculoModeloComponent ],
  imports: [
    CommonModule,
    VeiculoModeloRoutingModule,
    MenuSuperiorModule
  ]
})
export class VeiculoModeloModule { }
