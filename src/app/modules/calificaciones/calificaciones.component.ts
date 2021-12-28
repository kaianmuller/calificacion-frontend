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

  count:number = 0;
  constructor(private calificServ:CalificacionService,private authServ:AuthService) { }

  ngOnInit(): void {
    this.getAll();
  }



  getAll(){
    this.calificServ.getAll().then((result)=>{this.items = result});
    this.getCount();
  }


  getCount(){
    this.calificServ.getCount().then((result)=>{this.count = result});
  }

  calcularPromedio(){
    var suma = 0;
    this.items.forEach(e => suma+=e.puntaje);
    return suma / this.items.length;
  }


  setStarStyle(i:number,puntaje:number){
      return {color:i<=puntaje?{'color':'gold'}:{}, icon:i<=puntaje?'pi pi-star-fill':'pi pi-star'}
  }

  logout(){
    this.authServ.logout();
  }

}
