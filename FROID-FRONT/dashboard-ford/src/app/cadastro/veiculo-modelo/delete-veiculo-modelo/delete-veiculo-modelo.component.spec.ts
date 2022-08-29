import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVeiculoModeloComponent } from './delete-veiculo-modelo.component';

describe('DeleteVeiculoModeloComponent', () => {
  let component: DeleteVeiculoModeloComponent;
  let fixture: ComponentFixture<DeleteVeiculoModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVeiculoModeloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteVeiculoModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
