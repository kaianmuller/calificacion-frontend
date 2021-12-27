import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericServiceService } from 'src/app/shared/generic/services/generic-service/generic-service.service';
import { Usuario } from 'src/app/shared/models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericServiceService<Usuario>{

  constructor(private readonly http: HttpClient) {
    super('usuarios', http);
  }
}
