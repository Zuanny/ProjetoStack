import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/autenticacao/token.service';
import {map, tap} from 'rxjs'
let API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class VeiculoModeloService {

  constructor(private tokenService: TokenService, private http: HttpClient) { }

    retornaListaVeicluloModelo (){
      return this.http.get<any>(`${API}/veiculomodel`, {
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

   retornaVeicluloModeloId (id: number){
    return this.http.get<any>(`${API}/veiculomodel/${id}`, {
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

 CadastrarVeicluloModelo (ModeloVeiculo: any){
  return this.http.post<any>(`${API}/veiculomodel`, ModeloVeiculo ,{
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
atualizarVeicluloModelo (id: any , ModeloVeiculo: any){
  return this.http.patch<any>(`${API}/veiculomodel/${id}`, ModeloVeiculo ,{
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

excluirrVeicluloModelo (id: any ){
  return this.http.delete<any>(`${API}/veiculomodel/${id}` ,{
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