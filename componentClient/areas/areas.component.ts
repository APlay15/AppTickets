import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketArea } from 'src/app/models/ticket_areas';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  listaArea:TicketArea[] = []
  jsData:any =`{"fx":"gtdareasA","d":{}}`
  constructor(private ticketService:TicketsServiceService,private route:Router) { }

  ngOnInit(): void {
    this.getAreas()
  }

  getAreas(){
    this.ticketService.getData(this.jsData).subscribe(data=>{
      let jsdata:any
      jsdata = data
      this.listaArea = jsdata.data.item
      console.log(jsdata);
      
      //this.ticketTareas = data
    },error =>{
      console.log(error);
      
    })
  }

  public tema(id?:number){
    this.route.navigate(['temas/', id]);
}
public IrInicio(){
  this.route.navigate(['inicio']);
}

}
