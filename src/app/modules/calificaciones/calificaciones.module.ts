import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalificacionesComponent } from './calificaciones.component';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [
    CalificacionesComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    PaginatorModule
  ]
})
export class CalificacionesModule { }
