import { Injectable } from '@angular/core';
const KEY =''
@Injectable({
  providedIn: 'root'
})
export class TokenService {

retornaToken():any{
  return localStorage.getItem(KEY) ?? '';
}

salvaToken(token:string): any {
  localStorage.setItem(KEY, token);
}

excluiToken():void
{
  localStorage.removeItem(KEY);
}

possuiToken():boolean{
  return !! this.retornaToken();
}
}
