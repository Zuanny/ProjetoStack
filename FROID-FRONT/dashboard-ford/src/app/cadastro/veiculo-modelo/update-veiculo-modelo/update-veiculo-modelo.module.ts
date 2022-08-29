import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateVeiculoModeloComponent } from './update-veiculo-modelo.component';
import { MenuSuperiorModule } from 'src/app/menu-superior/menu-superior.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UpdateVeiculoModeloComponent],
  imports: [
    CommonModule,
    MenuSuperiorModule,
    FormsModule
  ]
})
export class UpdateVeiculoModeloModule { }
