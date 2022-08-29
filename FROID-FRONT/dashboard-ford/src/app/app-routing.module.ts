import { LoginGuard } from './autenticacao/login.guard';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren:()=> import('./login/login.module').then((m)=>m.LoginModule),
    canLoad: [LoginGuard]
  },
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then((m)=>m.HomeModule),
    canLoad: [AutenticacaoGuard]

  },
  {
    path:'dashboard',
    loadChildren: ()=> import('./dashboard/dashboard.module').then((m)=>m.DashboardModule),
    canLoad: [AutenticacaoGuard]

  },
  {
    path:'usuario',
    loadChildren: ()=> import('./cadastro/usuario/usuario.module').then((m)=>m.UsuarioModule),
    canLoad: [AutenticacaoGuard]

  },
  {
    path:'veiculo',
    loadChildren: ()=> import('./cadastro/veiculo/veiculo.module').then((m)=>m.VeiculoModule),
    canLoad: [AutenticacaoGuard]

  },
  {
    path:'veiculomodelo',
    loadChildren: ()=> import('./cadastro/veiculo-modelo/veiculo-modelo.module').then((m)=>m.VeiculoModeloModule),
    canLoad: [AutenticacaoGuard]

  },
  {
    path:'usuario/cadastro',
    loadChildren: ()=> import('./cadastro/usuario/create-usuario/create-usuario.module').then((m)=>m.CreateUsuarioModule),
    canLoad: [AutenticacaoGuard]
  },
  {
    path:'veiculo/cadastro',
    loadChildren: ()=> import('./cadastro/veiculo/create-veiculo/create-veiculo.module').then((m)=>m.CreateVeiculoModule),
    canLoad: [AutenticacaoGuard]
  },
  {
    path:'veiculomodelo/cadastro',
    loadChildren: ()=> import('./cadastro/veiculo-modelo/create-veiculo-modelo/create-veiculo-modelo.module').then((m)=>m.CreateVeiculoModeloModule),
    canLoad: [AutenticacaoGuard]
  },
  {
    path:'usuario/update/:id',
    loadChildren: ()=> import('./cadastro/usuario/update-usuario/update-usuario.module').then((m)=>m.UpdateUsuarioModule),
    canLoad: [AutenticacaoGuard]
  },
  {
    path:'veiculo/update/:id',
    loadChildren: ()=> import('./cadastro/veiculo/update-veiculo/update-veiculo.module').then((m)=>m.UpdateVeiculoModule),
    canLoad: [AutenticacaoGuard]
  },
  {
    path:'veiculomodelo/update/:id',
    loadChildren: ()=> import('./cadastro/veiculo-modelo/update-veiculo-modelo/update-veiculo-modelo.module').then((m)=>m.UpdateVeiculoModeloModule),
    canLoad: [AutenticacaoGuard]
  },
  {
    path:'usuario/delete/:id',
    loadChildren: ()=> import('./cadastro/usuario/delete-usuario/delete-usuario.module').then((m)=>m.DeleteUsuarioModule),
    canLoad: [AutenticacaoGuard]
  },
  {
    path:'veiculo/delete/:id',
    loadChildren: ()=> import('./cadastro/veiculo/delete-veiculo/delete-veiculo.module').then((m)=>m.DeleteVeiculoModule),
    canLoad: [AutenticacaoGuard]
  },
  {
    path:'veiculomodelo/delete/:id',
    loadChildren: ()=> import('./cadastro/veiculo-modelo/delete-veiculo-modelo/delete-veiculo-modelo.module').then((m)=>m.DeleteVeiculoModeloModule),
    canLoad: [AutenticacaoGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
