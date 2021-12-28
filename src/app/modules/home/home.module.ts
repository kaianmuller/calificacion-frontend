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
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
    TooltipModule,
    OverlayPanelModule,
    BrowserModule,
    BrowserAnimationsModule,
    MessageModule,
    MessagesModule,
    ToastModule
  ],
  exports:[HomeComponent],
  providers:[MessageService]
})
export class HomeModule { }
