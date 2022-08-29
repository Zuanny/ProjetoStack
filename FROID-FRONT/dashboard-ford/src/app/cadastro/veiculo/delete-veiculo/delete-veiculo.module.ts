import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteVeiculoComponent } from './delete-veiculo.component';
import { FormsModule } from '@angular/forms';
import { MenuSuperiorModule } from 'src/app/menu-superior/menu-superior.module';



@NgModule({
  declarations: [ DeleteVeiculoComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuSuperiorModule
  ]
})
export class DeleteVeiculoModule { }
