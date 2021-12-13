import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesDisponiblesComponent } from './viajes-disponibles.component';

describe('ViajesDisponiblesComponent', () => {
  let component: ViajesDisponiblesComponent;
  let fixture: ComponentFixture<ViajesDisponiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajesDisponiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesDisponiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
