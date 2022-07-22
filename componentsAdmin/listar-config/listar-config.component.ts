import { Component, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/models/ticket_configuracion';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';

@Component({
  selector: 'app-listar-config',
  templateUrl: './listar-config.component.html',
  styleUrls: ['./listar-config.component.css']
})
export class ListarConfigComponent implements OnInit {

  listaConfig:Configuracion[]=[]
  jsData:any= `{"fx":"gtdConfig","d":{}}`
  
  constructor(private ticketService:TicketsServiceService) { }

  ngOnInit(): void {
    this.getConfig()
  }

  deleteConfig(id?:number){
  }

  getConfig(){
    this.ticketService.getData(this.jsData).subscribe(data=>{
      let jsdata:any
      jsdata = data
      this.listaConfig = jsdata.data.item
      console.log(jsdata);
    },error =>{
      console.log(error);
      
    })

  }

}
