import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerDetalleComponent } from './modals/ver-detalle/ver-detalle.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    VerDetalleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],exports:[
    VerDetalleComponent,
    MaterialModule
  ]
})
export class SharedModule { }
