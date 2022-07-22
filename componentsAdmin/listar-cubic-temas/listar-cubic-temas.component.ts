import { Component, OnInit } from '@angular/core';
import { CubicTema } from 'src/app/models/ticket_cubic_temas';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';

@Component({
  selector: 'app-listar-cubic-temas',
  templateUrl: './listar-cubic-temas.component.html',
  styleUrls: ['./listar-cubic-temas.component.css']
})
export class ListarCubicTemasComponent implements OnInit {

  listaCubicTemas:CubicTema[]=[]
  jsData:any= `{"fx":"gtdCuTema","d":{}}`
  constructor(private ticketService:TicketsServiceService) { }

  ngOnInit(): void {
    this.getCubicTemas()
  }

  getCubicTemas(){
    this.ticketService.getData(this.jsData).subscribe(data=>{
      let jsdata:any
      jsdata = data
      this.listaCubicTemas = jsdata.data.item
      console.log(jsdata);
    },error =>{
      console.log(error);
      
    })

  }

  deleteCubicTemas(id?:number){

  }
}
