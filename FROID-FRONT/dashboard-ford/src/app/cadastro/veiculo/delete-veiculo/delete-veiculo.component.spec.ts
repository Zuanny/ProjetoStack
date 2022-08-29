import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVeiculoComponent } from './delete-veiculo.component';

describe('DeleteVeiculoComponent', () => {
  let component: DeleteVeiculoComponent;
  let fixture: ComponentFixture<DeleteVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
