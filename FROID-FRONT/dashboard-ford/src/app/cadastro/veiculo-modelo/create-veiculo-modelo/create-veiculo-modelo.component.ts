import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoModeloService } from '../veiculo-modelo.service';

@Component({
  selector: 'app-create-veiculo-modelo',
  templateUrl: './create-veiculo-modelo.component.html',
  styleUrls: ['./create-veiculo-modelo.component.css']
})
export class CreateVeiculoModeloComponent implements OnInit {
  novoModeloVeiculo = {
    model:'',
    volumeTotal : 0,
    connected: 0,
    softwareUpdates: 0
  }

  constructor(private veiculoModelService : VeiculoModeloService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrarModeloVeiculo(){    
    this.veiculoModelService.CadastrarVeicluloModelo(this.novoModeloVeiculo).subscribe(res=>{
      alert('Modelo de veiculo cadastrado com sucesso')
      this.router.navigate(['veiculomodelo'])
    }, err => alert(err.error.mensagem))
  }

}
