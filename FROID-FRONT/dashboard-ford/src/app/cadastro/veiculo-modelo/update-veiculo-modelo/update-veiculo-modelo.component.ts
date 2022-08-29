import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculoModeloService } from '../veiculo-modelo.service';

@Component({
  selector: 'app-update-veiculo-modelo',
  templateUrl: './update-veiculo-modelo.component.html',
  styleUrls: ['./update-veiculo-modelo.component.css']
})
export class UpdateVeiculoModeloComponent implements OnInit {
  novoModeloVeiculo = {
    model:'',
    volumeTotal : 0,
    connected: 0,
    softwareUpdates: 0
  }
  id: any
  constructor(private veiculoModelService: VeiculoModeloService,
    private router: Router,
    private routerParams: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routerParams.snapshot.paramMap.get('id')
    this.veiculoModelService.retornaVeicluloModeloId(this.id).subscribe(res=>{
      this.novoModeloVeiculo = res
      
      
    })

  }

  atualizarModeloVeiculo(){    
    this.veiculoModelService.atualizarVeicluloModelo(this.id, this.novoModeloVeiculo).subscribe(res=>{
      alert('Modelo de veiculo atualizado com sucesso')
      this.router.navigate(['veiculomodelo'])
    }, err => alert(err.error.mensagem))
  }

}
