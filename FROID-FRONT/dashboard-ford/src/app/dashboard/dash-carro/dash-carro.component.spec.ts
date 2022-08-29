import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCarroComponent } from './dash-carro.component';

describe('DashCarroComponent', () => {
  let component: DashCarroComponent;
  let fixture: ComponentFixture<DashCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashCarroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
