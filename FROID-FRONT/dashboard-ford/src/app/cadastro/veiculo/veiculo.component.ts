import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoService } from './veiculo.service';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
  listaVeiculos: any = []
  constructor(private veiculoService: VeiculoService, private router: Router) { }

  ngOnInit(): void {
    this.veiculoService.retornaListaVeiclulo().subscribe(res => this.listaVeiculos = res)
  }

  redirectCadastro(){
    this.router.navigate(['veiculo/cadastro'])
  } 
}
