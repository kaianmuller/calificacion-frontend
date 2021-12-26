import { Component, OnInit } from '@angular/core';
import { Calificacion } from 'src/app/shared/models/Calificacion.model';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {
  items: Calificacion[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
