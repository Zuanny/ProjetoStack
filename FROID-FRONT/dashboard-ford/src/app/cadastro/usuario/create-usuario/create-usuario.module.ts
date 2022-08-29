import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUsuarioComponent } from './create-usuario.component';
import { MenuSuperiorModule } from 'src/app/menu-superior/menu-superior.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateUsuarioComponent],
  imports: [
    CommonModule,
    MenuSuperiorModule,
    FormsModule
  ]
})
export class CreateUsuarioModule { }
