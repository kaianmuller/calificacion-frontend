import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SystemMessagesService } from 'src/app/services/system-messages.service';
import { Calificacion } from 'src/app/shared/models/Calificacion.model';

@Component({
  selector: 'app-calificacion-card',
  templateUrl: './calificacion-card.component.html',
  styleUrls: ['./calificacion-card.component.css']
})
export class CalificacionCardComponent implements OnInit {
@Output() volver:EventEmitter<void> = new EventEmitter<void>();


  FORMULARIO:Formulario;

  constructor(private sysMsg:SystemMessagesService) {
    this.FORMULARIO = new Formulario(this.sysMsg);
   }

  ngOnInit(): void {
  }



volverHome(){
  this.FORMULARIO.resetForm();
  this.volver.emit();
}



  }






class Formulario{

  formulario:FormGroup = new FormGroup({});
  formErrors: { [k: string]: string } = {};

  constructor(private sysMsg:SystemMessagesService){
  this.buildForm();
  }



  buildForm(){
    this.formulario = new FormGroup({
      id: new FormControl(null),
      nombre: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required]),
      puntaje:new FormControl(null,[Validators.required]),
      observaciones:new FormControl(null),
      empresa: new FormControl(null),
      telefono: new FormControl(null),
    });
    this.resetValidate();
  }


  validate(){
    for (let c in this.formulario.controls) {
      this.formErrors[c] = this.sysMsg.getFormMessages(
        this.formulario.get(c)?.errors
      );
    }
    this.focusFieldError();
  }



resetForm() {
  this.buildForm();
  this.resetValidate();
}

resetValidate() {
  this.formErrors = {
    nombre: '',
    correo: '',
    puntaje: '',
    observaciones: '',
    telefono: ''
  };
}


setPuntaje(puntaje:number){
  this.formulario.get('puntaje')?.setValue(puntaje);
}

getPuntaje(){
  return this.formulario.get('puntaje')?.value;
}



submit(event: Event) {
  event.preventDefault();

  if (this.formulario.valid) {
    let calificacion: Calificacion = new Calificacion();
    Object.assign(calificacion, this.formulario.value);

    console.log(calificacion);

    this.resetForm();
  } else {
    this.validate();
  }
}


setStarStyle(i:number){
  let puntaje = this.getPuntaje();
    return {color:i<=puntaje?{'color':'gold'}:{}, icon:i<=puntaje?'pi pi-star-fill':'pi pi-star'}
}


markField(name: string) {
  return this.formErrors[name] != '' ? { border: 'solid 2px red' } : {};
}

focusFieldError() {
  for (let e in this.formErrors) {
    if (this.formErrors[e] != '') {
      document.getElementById(e)?.focus();
      break;
    }
  }
}

/*
async exist(control: AbstractControl) {
  this.loadEmailIcon = true;
  return this.autoServ.existAutoByChapa(control.value).then((value) => {
    this.loadChapaIcon = false;
    if (value && Utils.isEmpty(this.autoTarget)) {
      return { existe: true };
    } else {
      return null;
    }
  });
}
*/



}
