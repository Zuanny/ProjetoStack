import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVeiculoComponent } from './create-veiculo/create-veiculo.component';
import { DeleteVeiculoComponent } from './delete-veiculo/delete-veiculo.component';
import { UpdateVeiculoComponent } from './update-veiculo/update-veiculo.component';
import { VeiculoComponent } from './veiculo.component';

const routes: Routes = [

  {
    path:'',
    component: VeiculoComponent
    
  },
  {
    path:'cadastro',
    component: CreateVeiculoComponent
    
  },
  {
    path:'update/:id',
    component: UpdateVeiculoComponent
  },
  {
    path:'delete/:id',
    component: DeleteVeiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculoRoutingModule { }
