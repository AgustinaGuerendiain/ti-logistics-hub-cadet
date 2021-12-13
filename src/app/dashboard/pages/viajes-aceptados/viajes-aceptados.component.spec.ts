import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesAceptadosComponent } from './viajes-aceptados.component';

describe('ViajesAceptadosComponent', () => {
  let component: ViajesAceptadosComponent;
  let fixture: ComponentFixture<ViajesAceptadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajesAceptadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesAceptadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
