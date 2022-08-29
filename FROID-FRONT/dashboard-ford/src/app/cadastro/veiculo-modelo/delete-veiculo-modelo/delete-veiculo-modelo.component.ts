import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { VeiculoModeloService } from '../veiculo-modelo.service';

@Component({
  selector: 'app-delete-veiculo-modelo',
  templateUrl: './delete-veiculo-modelo.component.html',
  styleUrls: ['./delete-veiculo-modelo.component.css']
})
export class DeleteVeiculoModeloComponent implements OnInit {
  novoModeloVeiculo = {
    model:'',
    volumetotal : 0,
    connected: 0,
    softwareUpdates: 0
  }
  id: any

  constructor(private veiculoModelService: VeiculoModeloService,
    private router: Router,
    private routerParams: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.routerParams.snapshot.paramMap.get('id')
    this.veiculoModelService.retornaVeicluloModeloId(this.id).subscribe(res=>{
      this.novoModeloVeiculo = res})
      
  }
  excluirModeloVeiculo(){    
    this.veiculoModelService.excluirrVeicluloModelo(this.id).subscribe(res=>{
      alert('Modelo de veiculo excluido com sucesso')
      this.router.navigate(['veiculomodelo'])
    }, err => alert(err.error.mensagem))
  }

}
