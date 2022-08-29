import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/autenticacao/token.service';
import {  map, tap } from 'rxjs';
let API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private tokenService: TokenService, private http: HttpClient) {

   }
   
   retornaListaVeiclulo (){
    return this.http.get<any>(`${API}/veiculo`, {
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

 retornaVeiclulo(id:any){
  return this.http.get<any>(`${API}/veiculo/${id}`, {
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
    CadastrarVeiculo (request: any){
  return this.http.post<any>(`${API}/veiculo`, request, {
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

AtualizaVeiculo (id:any, request: any){
  return this.http.patch<any>(`${API}/veiculo/${id}`, request, {
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

deletarVeiculo (id:any){
  return this.http.delete<any>(`${API}/veiculo/${id}`, {
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
