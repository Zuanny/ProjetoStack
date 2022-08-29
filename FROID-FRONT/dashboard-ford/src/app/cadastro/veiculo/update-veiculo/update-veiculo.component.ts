import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculoModeloService } from '../../veiculo-modelo/veiculo-modelo.service';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-update-veiculo',
  templateUrl: './update-veiculo.component.html',
  styleUrls: ['./update-veiculo.component.css']
})
export class UpdateVeiculoComponent implements OnInit {
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

  id: any
  listaVeiculosModel: any = []
  constructor(private veiculoService: VeiculoService, private router: Router, private routerParams: ActivatedRoute,private VeiculoModeloService: VeiculoModeloService) { }

  ngOnInit(): void {
    this.id = this.routerParams.snapshot.paramMap.get('id')

    this.veiculoService.retornaVeiclulo(this.id).subscribe(res=>{
      this.veiculo = res
    })
    this.VeiculoModeloService.retornaListaVeicluloModelo().subscribe(res=>{this.listaVeiculosModel = res
    })
  }
   
  AtualizarVeiculo(){
    this.veiculoService.AtualizaVeiculo(this.id,this.veiculo).subscribe(res=>{
      alert('Veiculo Atualizado com sucesso')
      this.router.navigate(['veiculo'])
    }, err => {
      console.log(err);
      
      alert(err.error.mensagem);
      
    })
  }
}
