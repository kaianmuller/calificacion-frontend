import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalificacionService } from 'src/app/services/calificacion/calificacion.service';
import { SystemMessagesService } from 'src/app/services/system-messages/system-messages.service';
import { Calificacion } from 'src/app/shared/models/Calificacion.model';
import { Utils } from 'src/app/shared/Utils';

@Component({
  selector: 'app-calificacion-card',
  templateUrl: './calificacion-card.component.html',
  styleUrls: ['./calificacion-card.component.css']
})
export class CalificacionCardComponent implements OnInit {
@Output() volver:EventEmitter<void> = new EventEmitter<void>();

  formulario:FormGroup = new FormGroup({});
  formErrors: { [k: string]: string } = {};

  loadEmailIcon:boolean = false;

  constructor(private sysMsg:SystemMessagesService,private calificServ:CalificacionService){
  this.buildForm();
  }

ngOnInit(): void {}

  buildForm(){
    this.formulario = new FormGroup({
      id: new FormControl(null),
      nombre: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required,Validators.email],[this.exist.bind(this)]),
      puntaje:new FormControl(null,[Validators.required]),
      observaciones:new FormControl(null,[Validators.maxLength(255)]),
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

    this.calificServ.createOne(calificacion).then((result)=>{console.log(result)})

    this.resetForm();
    this.volverHome();
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


async exist(control: AbstractControl) {
  this.loadEmailIcon = true;
  return this.calificServ.existCalificacionByCorreo(control.value).then((value) => {
    this.loadEmailIcon = false;
    if (value) {
      return { existe: true };
    } else {
      return null;
    }
  });
}



volverHome(){
  this.volver.emit();
}



  }

