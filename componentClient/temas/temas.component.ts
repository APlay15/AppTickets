import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketArea } from 'src/app/models/ticket_areas';
import { TicketTema } from 'src/app/models/ticket_tema';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {

  public folder:any
  listaTemas:TicketTema[] = []
  listaArea:TicketArea[] = []
  id:string | null
  jsData:any = `{"fx":"gtdTemasFav","d":{}}`
  
  constructor(private activatedRoute: ActivatedRoute,
    private ticketService:TicketsServiceService,
    private route:Router,
    private aRouter: ActivatedRoute) { 
      this.id = aRouter.snapshot.paramMap.get('id')
    }

    

  ngOnInit(): void {
    let jsData2:any = `{"fx":"gtdTemasArea","d":{"idA":"${this.id}"}}`
    if (this.id!=null) {
      this.getAreas(jsData2)
    } else {
      this.getAreas(this.jsData)
    }
    document.cookie="contadorTickets=0"
  }

  getAreas(datos:any){
    this.ticketService.getData(datos).subscribe(data=>{
      let jsdata:any
      jsdata = data
      this.listaTemas = jsdata.data.item
      console.log(jsdata);
      
      //this.ticketTareas = data
    },error =>{
      console.log(error);
      
    })
  }

  getTemas(){
    this.ticketService.getData(this.jsData).subscribe(data=>{
      let jsdata:any
      jsdata = data
      this.listaTemas = jsdata
      console.log(data);  
    },error=>{
      console.log(error);
      
    })
  }

  getArea(){
    let jsnData=`{"fx":"gtdareasA","d":{}}`
     this.ticketService.getData(jsnData).subscribe(data=>{
      let jsdata:any
      jsdata = data
      this.listaArea = jsdata.data.item
      console.log(jsdata);
      
      //this.ticketTareas = data
    },error =>{
      console.log(error);
      
    })
    
  }
  
  public generarTicket(){
    //this.route.navigate(['/generarTicket', temas.id+'&'+temas.idarea]);
}
public MenuTareas(){
  this.route.navigate(['areas']);
}
}
