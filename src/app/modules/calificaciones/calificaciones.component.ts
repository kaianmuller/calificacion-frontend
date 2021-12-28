import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CalificacionService } from 'src/app/services/calificacion/calificacion.service';
import { Calificacion } from 'src/app/shared/models/Calificacion.model';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {
  items: Calificacion[] = [];

  constructor(private calificServ:CalificacionService,private authServ:AuthService) { }

  ngOnInit(): void {
    this.getAll();
  }



  getAll(){
    this.calificServ.getAll().then((result)=>{this.items = result});
  }

  logout(){
    this.authServ.logout();
  }

}
