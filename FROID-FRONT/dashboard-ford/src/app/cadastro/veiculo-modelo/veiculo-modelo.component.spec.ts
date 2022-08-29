import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoModeloComponent } from './veiculo-modelo.component';

describe('VeiculoModeloComponent', () => {
  let component: VeiculoModeloComponent;
  let fixture: ComponentFixture<VeiculoModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoModeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculoModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
