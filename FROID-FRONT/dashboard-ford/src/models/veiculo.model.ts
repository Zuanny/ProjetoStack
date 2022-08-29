export interface Veiculos extends Array<Veiculo> {}
export interface VeiculosData extends Array<VeiculoData> {}

export interface Veiculo{
  id: number | string
  model: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
}

export interface VeiculosAPI {
  vehicles: Veiculos;
}



export interface VeiculoData {
  id?: number | string
  vin?: string
  odometer?: number | string
  tirePressure?: number | string
  status?: number | string
  batteryStatus?: number | string
  fuelLevel?: number | string,
  latitude?: number | string,
  longitude?: number | string,
  vehicle_id?: number

}


export interface VeiculoEscolhido {
  id: number | string
  model: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
  escolhido?: boolean
  imagem?: string
  vin?: string
  odometer?: number | string
  tirePressure?: number | string
  status?: number | string
  batteryStatus?: number | string
  fuelLevel?: number | string,
  latitude?: number | string,
  longitude?: number | string,
  vehicle_id?: number
}

