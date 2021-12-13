import { Component, OnInit } from '@angular/core';
import { Viaje } from '../../models/viaje';
import { ViajesService } from '../../service/viajes.service';
import { forkJoin, Observable, concat} from 'rxjs';

@Component({
  selector: 'app-historial-viajes',
  templateUrl: './historial-viajes.component.html',
  styleUrls: ['./historial-viajes.component.scss']
})
export class HistorialViajesComponent implements OnInit {

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

    this.traerViajesHistorial();
   
    
  }

  traerViajesHistorial(){
    let cuatro  =  this.viajeService.getViajes(4);
    let ocho = this.viajeService.getViajes(8);
    let nueve  =  this.viajeService.getViajes(9);
  
   
   forkJoin([cuatro,ocho,nueve]).subscribe(resp=>{

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

    console.log(this.viajes)

   },error => {

    console.log(error);
    
   });
  }


}
