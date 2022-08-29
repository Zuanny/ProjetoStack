import { Veiculos, VeiculoEscolhido, VeiculosData } from './../../../models/veiculo.model';
import { RequisicoesService } from './../requisicoes.service';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from "chart.js";
Chart.register(...registerables)


@Component({
  selector: 'app-dash-carro',
  templateUrl: './dash-carro.component.html',
  styleUrls: ['./dash-carro.component.css']
})
export class DashCarroComponent implements OnInit {
@ViewChild('Conected', {static: true}) canvasConected : ElementRef | any
@ViewChild('softwareUpdate', {static: true}) canvassoftwareUpdate : ElementRef | any

@Input()
VeiculoVin: String = '';

veiculos: Veiculos = []
veiculosDados: VeiculosData = []
VeiculoEscolhido: VeiculoEscolhido | any = {}
graficoConnected: any
graficoSoftware: any
configConected: any  = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [ 0, 100],
      backgroundColor: [
        'rgb(0,0,128)',
        'rgb(211,211,211)'
      ]
    }]
  }
}
 
configSoftware: any = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [ 0, 100],
      backgroundColor: [
        'rgb(0,0,128)',
        'rgb(211,211,211)'
      ]
    }]
  }
}



  constructor( private RequisicoesService: RequisicoesService) { }
 

  ngOnInit(): void {
    this.listarCarros()
    this.listarCarrosData()
    this.graficoConnected = new Chart(this.canvasConected.nativeElement, this.configConected)
    this.graficoSoftware = new Chart(this.canvassoftwareUpdate.nativeElement, this.configSoftware)
    this.VeiculoEscolhido.vin = 'Digite o código vin'
  
    
  }

  listarCarros(){
    this.RequisicoesService.getVeiculos().subscribe((veiculos)=>{
      this.veiculos = veiculos

    })
}
  listarCarrosData(){
  this.RequisicoesService.getVeiculosData().subscribe((veiculos)=>{
    this.veiculosDados = veiculos
  })
}

  DetalharCarroEscolhidoPorNome(carro:string){
  this.VeiculoEscolhido.escolhido = true

   for(let itens of this.veiculos){
    if(itens.model == carro){

      this.VeiculoEscolhido.id = itens.id
      this.VeiculoEscolhido.model = itens.model
      this.VeiculoEscolhido.volumetotal  = itens.volumetotal
      this.VeiculoEscolhido.connected = itens.connected
      this.VeiculoEscolhido.softwareUpdates = itens.softwareUpdates
      this.VeiculoEscolhido.imagem = `assets/${itens.model.toLocaleLowerCase()}.png`
      this.DetalharGraficoConected(this.VeiculoEscolhido.connected, this.VeiculoEscolhido.volumetotal )
      this.DetalharGraficoSoftware(this.VeiculoEscolhido.softwareUpdates, this.VeiculoEscolhido.volumetotal )
    }
}

  //   for(let itens of this.veiculosDados){
  //     if(itens.id == this.VeiculoEscolhido.id ){

  //       this.VeiculoEscolhido.vin = itens.vin
  //       this.VeiculoEscolhido.odometer = itens.odometer
  //       this.VeiculoEscolhido.status = itens.status
  //       this.VeiculoEscolhido.tirePressure = itens.tirePressure
  //       this.VeiculoEscolhido.batteryStatus = itens.batteryStatus
  //       this.VeiculoEscolhido.fuelLevel = itens.fuelLevel
  //       this.VeiculoEscolhido.latitude = itens.latitude
  //       this.VeiculoEscolhido.longitude = itens.longitude

  //   }
  // }

}

  DetalharCarroEscolhidoPorVin(event :any){
  this.VeiculoEscolhido.escolhido = true

    let vin = event.target.value.trim()

  
    
    for(let itens of this.veiculosDados){
      if(itens.vin == vin ){

        this.VeiculoEscolhido.vin = itens.vin
        this.VeiculoEscolhido.odometer = itens.odometer
        this.VeiculoEscolhido.status = itens.status
        this.VeiculoEscolhido.tirePressure = itens.tirePressure
        this.VeiculoEscolhido.batteryStatus = itens.batteryStatus
        this.VeiculoEscolhido.fuelLevel = itens.fuelLevel
        this.VeiculoEscolhido.latitude = itens.latitude
        this.VeiculoEscolhido.longitude = itens.longitude
        this.VeiculoEscolhido.id = itens.vehicle_id


    }
  }
//   for(let itens of this.veiculos){
//     if(itens.id == this.VeiculoEscolhido.id){

//       this.VeiculoEscolhido.id = itens.id
//       this.VeiculoEscolhido.model = itens.model
//       this.VeiculoEscolhido.volumetotal  = itens.volumetotal
//       this.VeiculoEscolhido.connected = itens.connected
//       this.VeiculoEscolhido.softwareUpdates = itens.softwareUpdates
//       this.VeiculoEscolhido.imagem = `assets/${itens.model.toLocaleLowerCase()}.png`
//       this.DetalharGraficoConected(this.VeiculoEscolhido.connected, this.VeiculoEscolhido.volumetotal )
//       this.DetalharGraficoSoftware(this.VeiculoEscolhido.softwareUpdates, this.VeiculoEscolhido.volumetotal )
//     }
// }

}


DetalharGraficoConected(connected: any, volumetotal: any){
  this.graficoConnected.reset()
  let porcentagem = ((connected/volumetotal) * 100)
  this.VeiculoEscolhido.connectedPorentagem = porcentagem.toFixed(2)
  this.configConected.data.datasets[0].data[0] = connected
  this.configConected.data.datasets[0].data[1] = volumetotal - connected
  this.graficoConnected.update('active')

}

DetalharGraficoSoftware(softwareUpdate: any, volumetotal: any){
  this.graficoSoftware.reset()
  let porcentagem =((softwareUpdate/volumetotal) * 100)
  this.VeiculoEscolhido.softwarePorentagem = porcentagem.toFixed(2)
  this.configSoftware.data.datasets[0].data[0] = softwareUpdate
  this.configSoftware.data.datasets[0].data[1] = volumetotal - softwareUpdate
  this.graficoSoftware.update('active')
}
}

