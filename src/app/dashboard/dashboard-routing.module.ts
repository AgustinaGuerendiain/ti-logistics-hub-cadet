import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HistorialViajesComponent } from './pages/historial-viajes/historial-viajes.component';
import { ViajesComponent } from './pages/viajes/viajes.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent 
  },
  { 
    path: 'viajes', 
    component: ViajesComponent
  },
  { 
    path: 'viajes-historial', 
    component: HistorialViajesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
