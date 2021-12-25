import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {ButtonModule} from 'primeng/button';
import { CalificacionCardComponent } from './components/calificacion-card/calificacion-card.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ReactiveFormsModule } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    HomeComponent,
    CalificacionCardComponent,
    LoginCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TooltipModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
