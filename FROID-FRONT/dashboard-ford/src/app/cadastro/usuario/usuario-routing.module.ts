import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';
import { UsuarioComponent } from './usuario.component';


const routes: Routes = [
  {
    path:'',
    component: UsuarioComponent,
    
  },{
    path: 'cadastro',
    component: CreateUsuarioComponent
  },
  {
    path: 'update/:id',
    component: UpdateUsuarioComponent
  },
  {
    path: 'delete/:id',
    component: DeleteUsuarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
