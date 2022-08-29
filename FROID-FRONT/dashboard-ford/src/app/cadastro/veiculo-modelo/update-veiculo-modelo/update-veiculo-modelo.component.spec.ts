import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVeiculoModeloComponent } from './update-veiculo-modelo.component';

describe('UpdateVeiculoModeloComponent', () => {
  let component: UpdateVeiculoModeloComponent;
  let fixture: ComponentFixture<UpdateVeiculoModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVeiculoModeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVeiculoModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
