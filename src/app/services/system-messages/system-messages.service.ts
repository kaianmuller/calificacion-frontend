import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemMessagesService {

  systemMessages = Array<{ [key: string]: any }>();
  formMessages = Array<{ [key: string]: any }>();
  dialogMessages = Array<{ [key: string]: any }>();

  constructor() {
    this.systemMessages = [
      {
        401: {
          severity: 'error',
          summary: 'No se puede acceder al sistema.',
          detail: 'Credenciales invalidas!',
        },
      },
    ];

    this.formMessages = [
      { required: '- Este campo es requerido!' },
      { existe: '- El correo ingresado ya existe en el sistema!' },
      { maxlength: '- Excediste el numero maximo de caracteres permitido (255)!' },
      { min: '- Este campo requiere un valor superior!' },
      { email: '- Este debe contener un email!' },
    ];

  }

  getFormMessages(validator: any) {
    let msgs = '';

    if (validator) {
      this.formMessages.forEach((m) => {
        let key = Object.keys(m)[0];
        if (validator.hasOwnProperty(key)) {
          msgs += m[key] + '\n';
        }
      });
    }

    return msgs;
  }

  getSystemMessage(error: string) {
    let msg = this.systemMessages.find((m) => Object.keys(m)[0] == error);
    return msg ? msg[error] : {};
  }
}
