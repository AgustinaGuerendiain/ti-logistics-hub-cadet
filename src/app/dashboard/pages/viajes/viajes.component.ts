import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent implements OnInit{
  

  constructor() { }

  ngOnInit(): void {}

  selected: string  = ''; // Iniciamos
  verSelected: string  = '';

  capturar() {
    this.verSelected = this.selected;
  }
 
}
