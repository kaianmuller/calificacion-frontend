import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericServiceService } from 'src/app/shared/generic/services/generic-service/generic-service.service';
import { Calificacion } from 'src/app/shared/models/Calificacion.model';
import { Utils } from 'src/app/shared/Utils';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService extends GenericServiceService<Calificacion>{

  constructor(private readonly http: HttpClient) {
    super('calificaciones', http);
  }


  async existCalificacionByCorreo(correo: string) {
    return this.http
      .get<boolean>(Utils.ip() + '/calificaciones/existCalificacionByCorreo/' + correo)
      .toPromise();
  }


  async getCount(){
    return this.http
      .get<number>(Utils.ip() + '/calificaciones/count')
      .toPromise();
  }

  async getMean(){
    return this.http
      .get<number>(Utils.ip() + '/calificaciones/mean')
      .toPromise();
  }
}
