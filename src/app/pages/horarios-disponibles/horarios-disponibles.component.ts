import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-horarios-disponibles',
  
  templateUrl: './horarios-disponibles.component.html',
  styleUrls: ['./horarios-disponibles.component.css']
})
export class HorariosDisponiblesComponent implements OnInit {
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = {
    allowEditing: false,
    allowDeleting:false,
    allowAdding:false,
      dataSource: [
      {
          Id: 1,
          Subject: 'Explosion of Betelgeuse Star <a> hola </a>',
          StartTime: new Date(2018, 1, 15, 9, 30),
        
          EndTime: new Date(2018, 1, 15, 11, 0)
      }, {
          Id: 2,
          Subject: 'Thule Air Crash Report',
          StartTime: new Date(2018, 1, 12, 12, 0),
          EndTime: new Date(2018, 1, 12, 14, 0)
      }, {
          Id: 3,
          Subject: 'Blue Moon Eclipse',
          StartTime: new Date(2018, 1, 13, 9, 30),
          EndTime: new Date(2018, 1, 13, 11, 0)
      }, {
          Id: 4,
          Subject: 'Meteor Showers in 2018',
          StartTime: new Date(2018, 1, 14, 13, 0),
          EndTime: new Date(2018, 1, 14, 14, 30)
      },{
        Id: 5,
        Subject: 'Abogado Alcivar',
        StartTime: new Date(2018, 1, 18, 13, 0),
        EndTime: new Date(2018, 1, 18, 14, 0)
    }]
  };
  ngOnInit(): void {
   
  
  }
 
 
 
   }