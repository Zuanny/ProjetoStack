import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/models/usuario.model';
import jwt_decode from "jwt-decode";
import { BehaviorSubject, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

let API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private UsuarioSubject = new BehaviorSubject<Usuario>({})

  constructor(private tokenService: TokenService, private http: HttpClient) {
    if(this.tokenService.possuiToken()){
      this.decodificarJWT()
    }
   }

  private decodificarJWT(){
    const token = this.tokenService.retornaToken();
    const  usuario = jwt_decode(token) as Usuario
    this.UsuarioSubject.next(usuario)

  }
  estaLogado(){
    if(this.tokenService.possuiToken()){


      return true
    }
    return false
  }

  restornaUsuario(){
    return this.UsuarioSubject.asObservable()
  }
  salvaToken(token: string){
    this.tokenService.salvaToken(token)
    this.decodificarJWT()
  }

  logout(){
    this.tokenService.excluiToken();
    this.UsuarioSubject.next({});

  }

  retornaListaUsuarios (){
    return this.http.get<any>(`${API}/usuario`, {
     headers: new HttpHeaders({
       'Content-Type':'application/json',
       "Authorization": `Bearer ${this.tokenService.retornaToken()}`
     })
   }).pipe(
     tap(),
     map((retorno)=>{ return retorno
     }
     
     )
     )

 }
 retornaUsuario (id: any){
  return this.http.get<any>(`${API}/usuario/${id}`, {
   headers: new HttpHeaders({
     'Content-Type':'application/json',
     "Authorization": `Bearer ${this.tokenService.retornaToken()}`
   })
 }).pipe(
   tap(),
   map((retorno)=>{ return retorno
   }
   
   )
   )

}

 CadastrarUsuario (request: any){
  return this.http.post<any>(`${API}/usuario`, request, {
   headers: new HttpHeaders({
     'Content-Type':'application/json',
     "Authorization": `Bearer ${this.tokenService.retornaToken()}`
   })
 }).pipe(
   tap(),
   map((retorno)=>{ return retorno
   }
   
   )
   )

}

EditarUsuario ( id: any, request: any){
  return this.http.put<any>(`${API}/usuario/${id}`, request, {
   headers: new HttpHeaders({
     'Content-Type':'application/json',
     "Authorization": `Bearer ${this.tokenService.retornaToken()}`
   })
 }).pipe(
   tap(),
   map((retorno)=>{ return retorno
   }
   
   )
   )

}
ExcluirUsuario ( id: any){
  return this.http.delete<any>(`${API}/usuario/${id}`, {
   headers: new HttpHeaders({
     'Content-Type':'application/json',
     "Authorization": `Bearer ${this.tokenService.retornaToken()}`
   })
 }).pipe(
   tap(),
   map((retorno)=>{ return retorno
   }
   
   )
   )

}

}
