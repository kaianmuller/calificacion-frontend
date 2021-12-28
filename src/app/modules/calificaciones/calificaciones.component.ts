import { Component, OnInit } from '@angular/core';
import { CalificacionService } from 'src/app/services/calificacion/calificacion.service';
import { Calificacion } from 'src/app/shared/models/Calificacion.model';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {
  items: Calificacion[] = [];

  constructor(private calificServ:CalificacionService) { }

  ngOnInit(): void {
    this.getAll();
  }



  getAll(){
    this.calificServ.getAll().then((result)=>{this.items = result});
  }

}
