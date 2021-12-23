import { Component, OnInit } from '@angular/core';
import { postViaje, Viaje } from '../../models/viaje';
import { ViajesService } from '../../service/viajes.service';
import { forkJoin} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { VerDetalleComponent } from 'src/app/shared/modals/ver-detalle/ver-detalle.component';

@Component({
  selector: 'app-viajes-aceptados',
  templateUrl: './viajes-aceptados.component.html',
  styleUrls: ['./viajes-aceptados.component.scss']
})
export class ViajesAceptadosComponent implements OnInit {

  viaje : Viaje = {
    id: 0,
    creationDate: '',
    lastStatusTravel: 0,
    travelEquipmentDTOs: [
      {
        id: 0,
        operationDate: '',
        observation: '',
        cadete: {
          id: 0,
          email: '',
          fullName: '',
          address: '',
          cellPhone: ''
        },
        operator: {
          id: 0,
          email: '',
          fullName: '',
          address: '',
          cellPhone: ''
        },
        equipment: {
          id: 0,
          mark: '',
          model: '',
          failure: '',
          clientId: 0,
          cliente: {
            id: 0,
            email: '',
            fullName: '',
            address: '',
            cellPhone: ''
          }
        },
        statusTravel: 0
      },
    ]
  }

  constructor(private viajeService : ViajesService, private dialogo : MatDialog) { }

  viajes : Viaje[] = [];

  ngOnInit(): void {

    this.traerViajesEnCurso();

  }

  traerViajesEnCurso(){

    let dos  =  this.viajeService.getViajes(2);
    let tres = this.viajeService.getViajes(3);
    let seis  =  this.viajeService.getViajes(6);
   
   forkJoin([dos,tres,seis]).subscribe(resp=>{

    let idCadete = Number(localStorage.getItem("UsuarioId"));

    this.viajes = [...resp[0],...resp[1],...resp[2]];

    this.viajes = this.viajes.filter(condicion=>{
      if (condicion.travelEquipmentDTOs[condicion.travelEquipmentDTOs.length-1].cadete) {
        return condicion.travelEquipmentDTOs[condicion.travelEquipmentDTOs.length-1].cadete.id === idCadete
      }
      return false
    })

    this.viajes.sort(function (a, b){
      return Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length-1].operationDate) - Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length-1].operationDate);
    });

   },error => {

    console.log(error);
    
   });
   
  }

  cambiarStatusTravel(viaje : Viaje, resignado: boolean){

    let lastStatusViaje: number = viaje.lastStatusTravel;
    let rol = Number(localStorage.getItem("Rol"));
    let idCadete = Number(localStorage.getItem("UsuarioId"));
  
    if (resignado == true ){
      lastStatusViaje = lastStatusViaje - 1;
    }else if(lastStatusViaje == ( 2 || 6 ) || lastStatusViaje == ( 3 || 7 ) ){
      lastStatusViaje = lastStatusViaje + 1;
    }

    let postViaje_ : postViaje = {
      id: viaje.id,
      statusTravel: lastStatusViaje,
      idRol : rol,
      cadeteID: idCadete,
      isReasigned: resignado,
    }
  
    this.viajeService.postViaje(postViaje_).subscribe(resp=>{
  
      console.log(resp);
      this.traerViajesEnCurso();
      
    }, error => {

      console.log(error);

    });

  }

  verDetalle(viaje : Viaje){

    this.dialogo.open(VerDetalleComponent, {
      data: viaje
    });
  
  }


}
