import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http'
import { Observable, tap } from 'rxjs';
const API = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }
  autenticar(usuario: string, senha:string, manterLogin?:boolean): Observable<HttpResponse<any>>{
    return this.http.post(`${API}/login`, {
      name: usuario,
      password: senha
    },{
      observe: 'response'
    }).pipe(
      tap((res)=>{
        const authToken = res.headers.get('x-access-token')?? ''
        console.log('login');
        
          this.usuarioService.salvaToken(authToken)


      })
    )
  }
}
