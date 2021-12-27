import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/generic/generic-service';
import { Calificacion } from 'src/app/shared/models/Calificacion.model';
import { Utils } from 'src/app/shared/Utils';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService extends GenericService<Calificacion>{

  constructor(private readonly http: HttpClient) {
    super('calificaciones', http);
  }


  async existCalificacionByCorreo(correo: string) {
    return this.http
      .get<boolean>(Utils.ip() + '/autos/existCalificacionByCorreo/' + correo)
      .toPromise();
  }
}
