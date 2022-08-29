import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVeiculoModeloComponent } from './create-veiculo-modelo/create-veiculo-modelo.component';
import { DeleteVeiculoModeloComponent } from './delete-veiculo-modelo/delete-veiculo-modelo.component';
import { UpdateVeiculoModeloComponent } from './update-veiculo-modelo/update-veiculo-modelo.component';
import { VeiculoModeloComponent } from './veiculo-modelo.component';

const routes: Routes = [
  {
    path:'',
    component: VeiculoModeloComponent
  },
  {
    path:'cadastro',
    component: CreateVeiculoModeloComponent
  },
  {
    path:'update/:id',
    component: UpdateVeiculoModeloComponent
  }
  ,
  {
    path:'delete/:id',
    component: DeleteVeiculoModeloComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculoModeloRoutingModule { }
