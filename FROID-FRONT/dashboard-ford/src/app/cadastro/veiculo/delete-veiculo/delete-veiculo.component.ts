import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-delete-veiculo',
  templateUrl: './delete-veiculo.component.html',
  styleUrls: ['./delete-veiculo.component.css']
})
export class DeleteVeiculoComponent implements OnInit {
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

  constructor(private veiculoService: VeiculoService,
     private router: Router,
     private routerParams: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.routerParams.snapshot.paramMap.get('id')

    this.veiculoService.retornaVeiclulo(this.id).subscribe(res=>{
      this.veiculo = res
    }) 

  }

   
  DeletarVeiculo(){
    this.veiculoService.deletarVeiculo(this.id).subscribe(res=>{
      alert('Veiculo Deletado com sucesso')
      this.router.navigate(['veiculo'])
    }, err => {
      console.log(err);
      
      alert(err.error.mensagem);
      
    })
  }


}
