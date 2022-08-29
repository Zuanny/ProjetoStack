import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuSuperiorModule } from 'src/app/menu-superior/menu-superior.module';
import { CreateVeiculoComponent } from './create-veiculo.component';




@NgModule({
  declarations: [CreateVeiculoComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuSuperiorModule
  ]
})
export class CreateVeiculoModule { }
