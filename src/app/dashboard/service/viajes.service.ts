import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Viaje, postViaje } from '../models/viaje';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  constructor(private http: HttpClient) { }

  getViajes(estadoViaje : number) : Observable<Viaje[]>{

    let rol = localStorage.getItem("Rol");

    return this.http.get<Viaje[]>(`api/Travel/${rol}/${estadoViaje}`);
    
  }

  postViaje(viaje : postViaje) : Observable<postViaje> {
    
    return this.http.post<postViaje>(`api/Travel?travelId=${viaje.id}&statusTravel=${viaje.statusTravel}&userOperation=${viaje.idRol}&cadeteId=${viaje.cadeteID}&isReasigned=${viaje.isReasigned}`,viaje);
    
  }
}

