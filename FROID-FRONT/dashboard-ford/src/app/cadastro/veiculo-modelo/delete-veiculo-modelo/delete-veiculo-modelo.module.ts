import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteVeiculoModeloComponent } from './delete-veiculo-modelo.component';
import { FormsModule } from '@angular/forms';
import { MenuSuperiorModule } from 'src/app/menu-superior/menu-superior.module';



@NgModule({
  declarations: [ DeleteVeiculoModeloComponent ],
  imports: [
    CommonModule,
    FormsModule,
    MenuSuperiorModule
  ]
})
export class DeleteVeiculoModeloModule { }
