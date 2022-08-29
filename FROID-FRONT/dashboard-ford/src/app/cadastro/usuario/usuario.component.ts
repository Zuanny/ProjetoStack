import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaUsuariosCadastrados: any = []

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.retornaListaUsuarios().subscribe((resp)=>{

      this.listaUsuariosCadastrados = resp
    }
    )
    
  }

  redirectCadastro(){
    this.router.navigate(['usuario/cadastro'])
  }

}
