import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { RequestService } from 'src/Services/request-service.service';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-horarios-disponibles',
  
  templateUrl: './horarios-disponibles.component.html',
  styleUrls: ['./horarios-disponibles.component.css']
})
export class HorariosDisponiblesComponent implements OnInit {

  tiposAbogados : any = [];
  horarios : any =[];
  public selectedDate: Date = new Date(2021, 7, 24);
  // public eventSettings: EventSettingsModel = {
  //   allowEditing: false,
  //   allowDeleting:false,
  //   allowAdding:false,
  //     dataSource: this.horarios
  // };
  

  // public selectedDate: Date = new Date(2020, 9, 20);

  private dataManager: DataManager = new DataManager({
    url: 'http://localhost:8000/api/horarios-tipoabogado/6',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
 });
 public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
 

 
  
  constructor(public requestServ: RequestService) { }

  ngOnInit(): void {
   
    this.getProveedores()
    this.getHorarios();
    
  }
 

 
  async getProveedores() {
    const response: any = await this.requestServ.getProveedores();
    if (response[0]) {
      this.tiposAbogados = response[1]
      console.log(this.tiposAbogados)
    
    }
  }

  async getHorarios() {
    const response: any = await this.requestServ.getHorariosporTipo();
    if (response[0]) {
      this.horarios = response[1]
      console.log(this.horarios)
   
    }
  }

  
}