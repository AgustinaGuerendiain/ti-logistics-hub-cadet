import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViajesComponent } from './viajes/viajes.component';
import { ViajesDisponiblesComponent } from './viajes-disponibles/viajes-disponibles.component';
import { ViajesAceptadosComponent } from './viajes-aceptados/viajes-aceptados.component';
import { HistorialViajesComponent } from './historial-viajes/historial-viajes.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    ViajesComponent,
    ViajesDisponiblesComponent,
    ViajesAceptadosComponent,
    HistorialViajesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
