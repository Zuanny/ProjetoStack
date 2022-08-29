import { Usuario } from './../../models/usuario.model';
import { BehaviorSubject } from 'rxjs';
import { UsuarioService } from './../autenticacao/usuario/usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,private router: Router) { }
  username:any
  userId : any
  ngOnInit(): void {
    this.getUsuario()
    this.getUsuarioId()

  }
  logout(){
    this.usuarioService.logout()
    this.router.navigate(['login'])

  }

  redirectDash(){
    this.router.navigate(['dashboard'])
  }
  redirectHome(){
    this.router.navigate(['home'])
  }
  redirectUsuario(){
    this.router.navigate(['usuario'])
  }
  redirectVeiculo(){
    this.router.navigate(['veiculo'])
  } 
  redirectModeloVeiculo(){
    this.router.navigate(['veiculomodelo'])
  }
  getUsuario (){
    this.usuarioService.restornaUsuario().subscribe((resposta)=>{
      this.username = resposta.usuario?.name

    })
  }
  getUsuarioId (){
    this.usuarioService.restornaUsuario().subscribe((resposta)=>{
      this.userId = resposta.usuario?.id
    })
  }
}
