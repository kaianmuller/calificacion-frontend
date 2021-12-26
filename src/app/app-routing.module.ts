import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalificacionesComponent } from './modules/calificaciones/calificaciones.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'calificaciones', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'calificaciones', component: CalificacionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
