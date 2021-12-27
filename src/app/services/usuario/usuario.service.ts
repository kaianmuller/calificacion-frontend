import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/generic/generic-service';
import { Usuario } from 'src/app/shared/models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericService<Usuario>{

  constructor(private readonly http: HttpClient) {
    super('usuarios', http);
  }
}
