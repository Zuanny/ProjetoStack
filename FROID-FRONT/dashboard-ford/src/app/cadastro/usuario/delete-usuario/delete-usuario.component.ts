import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.css']
})
export class DeleteUsuarioComponent implements OnInit {
  novoUsuario = {
    name : '',
    email :'',
    password : '',
    full_name: ''
  
  }

   id: string| null = '' ;

  constructor(private usuarioService: UsuarioService, private router:Router, private routePamans: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routePamans.snapshot.paramMap.get('id')

    this.usuarioService.retornaUsuario(this.id).subscribe(res=> this.novoUsuario = res)
  }

  deletarUsuario(){
    this.usuarioService.ExcluirUsuario(this.id).subscribe(res=> {
      alert('Usuario deletado com sucesso')
    
      this.router.navigate(['usuario'])
    }, err => alert(err.error.mensagem)
    
    )
    
  }

}
