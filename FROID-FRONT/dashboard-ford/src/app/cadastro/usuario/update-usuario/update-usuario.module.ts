import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSuperiorModule } from 'src/app/menu-superior/menu-superior.module';
import { FormsModule } from '@angular/forms';
import { UpdateUsuarioComponent } from './update-usuario.component';



@NgModule({
  declarations: [UpdateUsuarioComponent],
  imports: [
    CommonModule,
    MenuSuperiorModule,
    FormsModule
  ]
})
export class UpdateUsuarioModule { }
