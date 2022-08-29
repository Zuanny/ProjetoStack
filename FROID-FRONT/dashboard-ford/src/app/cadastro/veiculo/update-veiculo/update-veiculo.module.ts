import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateVeiculoComponent } from './update-veiculo.component';
import { FormsModule } from '@angular/forms';
import { MenuSuperiorModule } from 'src/app/menu-superior/menu-superior.module';



@NgModule({
  declarations: [UpdateVeiculoComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuSuperiorModule
  ]
})
export class UpdateVeiculoModule { }
