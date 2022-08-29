import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuSuperiorModule } from 'src/app/menu-superior/menu-superior.module';
import { CreateVeiculoModeloComponent } from './create-veiculo-modelo.component';




@NgModule({
  declarations: [CreateVeiculoModeloComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuSuperiorModule
  ]
})
export class CreateVeiculoModeloModule { }
