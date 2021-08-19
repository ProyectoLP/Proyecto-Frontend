import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HorariosDisponiblesComponent } from './pages/horarios-disponibles/horarios-disponibles.component';
import { InformacionCitaComponent } from './pages/informacion-cita/informacion-cita.component';
import { PrincipalComponent } from './pages/principal/principal.component';


const routes: Routes = [ 
 
  { path: 'principal', component: PrincipalComponent },
  { path: 'horariosDisponibles', component: HorariosDisponiblesComponent},
  { path: 'informacionCita', component: InformacionCitaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

