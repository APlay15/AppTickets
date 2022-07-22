import { Component, OnInit } from '@angular/core';
import { Interaccion } from 'src/app/models/ticket_interaccion';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';

@Component({
  selector: 'app-listar-interaccion',
  templateUrl: './listar-interaccion.component.html',
  styleUrls: ['./listar-interaccion.component.css']
})
export class ListarInteraccionComponent implements OnInit {

  listaInteraccion:Interaccion[]=[]
  jsData:any= `{"fx":"gtdInter","d":{}}`
  constructor(private ticketService:TicketsServiceService) { }

  ngOnInit(): void {
    this.getPropas()
  }

  deleteInteraccion(id?:number){
  }

  getPropas(){
    this.ticketService.getData(this.jsData).subscribe(data=>{
      let jsdata:any
      jsdata = data
      this.listaInteraccion = jsdata.data.item
      console.log(jsdata);
    },error =>{
      console.log(error);
      
    })

  }

}
