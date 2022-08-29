import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoModeloService } from './veiculo-modelo.service';

@Component({
  selector: 'app-veiculo-modelo',
  templateUrl: './veiculo-modelo.component.html',
  styleUrls: ['./veiculo-modelo.component.css']
})
export class VeiculoModeloComponent implements OnInit {

  ListaModeloVeiculos: any = []

  constructor(private veiculoModelServiceo: VeiculoModeloService, private router: Router) { }

  ngOnInit(): void {
    this.veiculoModelServiceo.retornaListaVeicluloModelo().subscribe(res=>this.ListaModeloVeiculos = res)
  }

  redirectCadastro(){
    this.router.navigate(['veiculomodelo/cadastro'])
  }
}
