import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})
export class UpdateUsuarioComponent implements OnInit {

  novoUsuario = {
    name : '',
    email :'',
    password : '',
    full_name: ''
  
  }

   id: string| null = '' ;

  constructor(private usuarioService: UsuarioService, private router: Router, private routeParamns: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routeParamns.snapshot.paramMap.get('id')

    this.usuarioService.retornaUsuario(this.id).subscribe(res=> this.novoUsuario = res)
  }


  atualizarUsuario(){
    this.usuarioService.EditarUsuario(this.id, this.novoUsuario).subscribe(res=> {
      alert('Usuario Atualizado com sucesso')
    
      this.router.navigate(['usuario'])
    }, err => alert(err.error.mensagem)
    
    )
    
  }
}
