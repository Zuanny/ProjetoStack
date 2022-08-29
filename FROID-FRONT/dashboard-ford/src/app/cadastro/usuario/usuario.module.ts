import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { MenuSuperiorModule } from '../../menu-superior/menu-superior.module';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';



@NgModule({
  declarations: [
    UsuarioComponent,
    
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    MenuSuperiorModule

  ]
})
export class UsuarioModule { }
