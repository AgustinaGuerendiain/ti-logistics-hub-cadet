import { Component, OnInit } from '@angular/core';
import { Viaje, postViaje } from '../../models/viaje';
import { ViajesService } from '../../service/viajes.service';
import { forkJoin} from 'rxjs';

@Component({
  selector: 'app-viajes-disponibles',
  templateUrl: './viajes-disponibles.component.html',
  styleUrls: ['./viajes-disponibles.component.scss']
})
export class ViajesDisponiblesComponent implements OnInit {

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

  constructor(private viajeService : ViajesService ) { }

  viajes : Viaje[] = [];

  ngOnInit(): void {
    this.traerViajesDisponibles();
  }

  traerViajesDisponibles(){
    let uno  =  this.viajeService.getViajes(1);
    let cinco = this.viajeService.getViajes(5);
   //let diez =  this.viajeService.getViajes(10);
   
    forkJoin([uno,cinco]).subscribe(resp=>{

      this.viajes = [...resp[0],...resp[1]];

      this.viajes.sort(function (a, b){
        return Date.parse(a.travelEquipmentDTOs[a.travelEquipmentDTOs.length-1].operationDate) - Date.parse(b.travelEquipmentDTOs[b.travelEquipmentDTOs.length-1].operationDate);
      });

    },error => {

      console.log(error);
      
    });
  }


  asignarViaje(viaje: Viaje){

    let lastStatusViaje: number = viaje.lastStatusTravel;
    let rol = Number(localStorage.getItem("Rol"));
    let idCadete = Number(localStorage.getItem("UsuarioId"));

    if (lastStatusViaje == ( 1 || 5)) {
      lastStatusViaje = lastStatusViaje + 1;
    }

    let postViaje_ : postViaje = {
      id: viaje.id,
      statusTravel: lastStatusViaje,
      idRol : rol,
      cadeteID: idCadete,
      isReasigned: false,
    }

    alert("asignaste viaje wii");

    this.viajeService.postViaje(postViaje_).subscribe(resp=>{

      console.log(resp);
      this.traerViajesDisponibles();
      
    },error => {

      console.log(error);
      
    });
  }

}
