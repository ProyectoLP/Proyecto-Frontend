import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { InformacionCitaComponent } from './pages/informacion-cita/informacion-cita.component';
import { HorariosDisponiblesComponent } from './pages/horarios-disponibles/horarios-disponibles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleModule, RecurrenceEditorModule , DayService , WeekService , WorkWeekService , MonthService , MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    InformacionCitaComponent,
    HorariosDisponiblesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule, NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
          distance: 12
        },
        vertical: {
          position: 'bottom',
          distance: 12,
          gap: 10
        }
      }
    }),
    ScheduleModule, RecurrenceEditorModule,
  ],
  providers: [DayService , WeekService , WorkWeekService , MonthService , MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
