import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuSuperiorModule } from 'src/app/menu-superior/menu-superior.module';
import { DeleteUsuarioComponent } from './delete-usuario.component';



@NgModule({
  declarations: [DeleteUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuSuperiorModule
  ]
})
export class DeleteUsuarioModule { }
