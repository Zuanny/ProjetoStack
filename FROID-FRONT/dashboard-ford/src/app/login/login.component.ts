import { UsuarioService } from './../autenticacao/usuario/usuario.service';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    usuario = ''
    senha = ''
    loginAutomatico = false
  constructor(private autenticacaoService: AutenticacaoService, private router: Router, private UsuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  login(){

    this.autenticacaoService.autenticar(this.usuario, this.senha).subscribe(()=>{
        if(this.loginAutomatico){


        }
       return this.router.navigate(['home'])

    },(error)=>{
      alert('Erro no login, dados invalidos')
    })
  }
}
