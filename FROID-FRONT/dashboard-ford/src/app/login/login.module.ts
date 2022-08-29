import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { MensagemComponent } from './../componentes/mensagem/mensagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MensagemModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
