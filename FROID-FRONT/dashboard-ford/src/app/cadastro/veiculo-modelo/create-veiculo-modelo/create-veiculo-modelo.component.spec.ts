import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVeiculoModeloComponent } from './create-veiculo-modelo.component';

describe('CreateVeiculoModeloComponent', () => {
  let component: CreateVeiculoModeloComponent;
  let fixture: ComponentFixture<CreateVeiculoModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVeiculoModeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVeiculoModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
