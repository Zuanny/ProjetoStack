import { TestBed } from '@angular/core/testing';

import { VeiculoModeloService } from './veiculo-modelo.service';

describe('VeiculoModeloService', () => {
  let service: VeiculoModeloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeiculoModeloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
