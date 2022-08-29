import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculoModeloService } from '../../veiculo-modelo/veiculo-modelo.service';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-create-veiculo',
  templateUrl: './create-veiculo.component.html',
  styleUrls: ['./create-veiculo.component.css']
})
export class CreateVeiculoComponent implements OnInit {
  veiculo = {
    vin: '',
    odometer: 0,
    tirePressure: '',
    status: '',
    batteryStatus: 0,
    fuelLevel: '',
    latitude: '',
    longitude: '',
    vehicle_id: 0
  }
  listaVeiculosModel: any = []
  constructor(private veiculoService: VeiculoService, private router: Router, private veiculoServiceModelo: VeiculoModeloService) { }

  ngOnInit(): void {
    this.veiculoServiceModelo.retornaListaVeicluloModelo().subscribe(res=>{this.listaVeiculosModel = res

    })
  }

  CadastrarVeiculo (){
    this.veiculoService.CadastrarVeiculo(this.veiculo).subscribe(res=>{
      alert('Veiculo Cadastrado com sucesso')
      this.router.navigate(['veiculo'])
    }, err => {
      alert(err.error.mensagem);
      
    })
  }

}
