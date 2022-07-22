import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Propaganda } from 'src/app/models/propaganda';
import { Ticket } from 'src/app/models/ticket';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-vista-turnos',
  templateUrl: './vista-turnos.component.html',
  styleUrls: ['./vista-turnos.component.css']
})
export class VistaTurnosComponent implements OnInit {

  jsDataTic:any
  tickets:Ticket[]=[]
  ticketsA:Ticket[]=[]
  showNavigationArrows = false;
  showNavigationIndicators = false;
  listaProp:Propaganda[]=[]
  jsdProp:any
  icall:number=0;
  idArea:string | null          //se obtiene el id del area para especificar la vista segun el area

  page = 1;
  pageSize = 4;
  collectionSize = this.tickets.length;
  //countries: Country[];

  constructor(config: NgbCarouselConfig,
    private serviceTicket:TicketsServiceService,
    private aRouter: ActivatedRoute) {
      this.idArea = aRouter.snapshot.paramMap.get('id')
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true; 
    this.refreshCountries();  }

  ngOnInit(): void {
    setInterval(()=> {
      console.log("llamada "+ this.icall);
      this.icall++
      this.getTurnosEspera()
    },2600)
    setInterval(()=> {
      console.log("llamada "+ this.icall);
      this.icall++
      this.getTurnoAtendiendo()
    },2600)
    this.getPropagandas()
    if (this.idArea!=null) {
      this.jsDataTic=`{"fx":"gtdTiArAb","d":{"area_id":${this.idArea}}}`
    }else{
      this.jsDataTic=`{"fx":"gtdAllTickets","d":{}}`
    }
    this.getTurnosEspera()


    
  }
  
  refreshCountries() {
    this.tickets
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  getPropagandas(){
    this.jsdProp = `{"fx":"gtdPropa","d":{}}`
    this.serviceTicket.getData(this.jsdProp).subscribe(data=>{

      let jsdata:any
      jsdata = data
      this.listaProp = jsdata.data.item
      console.log(jsdata);
      
      //this.ticketTareas = data
    },error =>{
      console.log(error);
      
    })
  }

  getTurnosEspera(){

      //this.jsDataTic=`{"fx":"gtdAllTickets","d":{}}`
      this.serviceTicket.getData(this.jsDataTic).subscribe(data=>{
        let jsdata:any
        jsdata = data
        this.tickets = jsdata.data.item
        console.log(this.tickets);
        
      })

  }
  getTurnoAtendiendo(){
    let jsnDataTic=`{"fx":"gtdTiAten","d":{"area_id":${this.idArea}}}`
    this.serviceTicket.getData(jsnDataTic).subscribe(data=>{
      let jsdata:any
      jsdata = data
      this.ticketsA = jsdata.data.item
      console.log(this.tickets);
      
    })
  }

  telepronter(){
    var contenidoMarquee = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis cum laborum quam voluptates magnam adipisci, eaque eum quo ipsam voluptatem accusantium molestiae quia nihil architecto, praesentium delectus aperiam qui maiores.";
    let nodoAnimado = document.createElement("p");

  }
}
