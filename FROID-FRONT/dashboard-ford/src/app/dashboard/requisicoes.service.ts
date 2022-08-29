import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { TokenService } from '../autenticacao/token.service';

const API = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class RequisicoesService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getVeiculos(){
     return this.http.get<any>(`${API}/veiculomodel`, {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        "Authorization": `Bearer ${this.tokenService.retornaToken()}`
      })
    }).pipe(
      tap(),
      map((retorno)=>{

        return retorno
      }
      
      )
      )

  }

getVeiculosData(){
  return this.http.get<any>(`${API}/veiculo`, {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      "Authorization": `Bearer ${this.tokenService.retornaToken()}`
    })
  }).pipe(
   tap(),
   map((retorno)=>{
     return retorno
   })
   )

}
}
