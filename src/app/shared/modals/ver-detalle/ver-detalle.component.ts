import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Viaje } from 'src/app/dashboard/models/viaje';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.scss']
})
export class VerDetalleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public item: Viaje, private dialogRef: MatDialogRef<VerDetalleComponent>) { }

  ngOnInit(): void {
    console.log(this.item)
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
