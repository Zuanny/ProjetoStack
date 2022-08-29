import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {

novoUsuario = {
  name : '',
  email :'',
  password : '',
  full_name: ''

}
  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  CadastrarUsuario(){
    this.usuarioService.CadastrarUsuario(this.novoUsuario).subscribe(res=> {
      alert('Usuario Cadastrado com sucesso')
    
      this.router.navigate(['usuario'])
    }, err => alert(err.error.mensagem)
    
    )
    
  }

}
