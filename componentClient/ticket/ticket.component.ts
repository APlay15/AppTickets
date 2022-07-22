import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cubiculo } from 'src/app/models/cubiculo';
import { Ticket } from 'src/app/models/ticket';
import { TicketArea } from 'src/app/models/ticket_areas';
import { CubicTema } from 'src/app/models/ticket_cubic_temas';
import { TicketTema } from 'src/app/models/ticket_tema';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';
import { AreasComponent } from '../areas/areas.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  valor:string = ""
  tema: TicketTema
  area:TicketArea
  ticketId:string|null
  jsnData:any
  //
  dato:any
  idArea:any
  idTema:any
  temaEsc:any
  listaCubicTemas:CubicTema[]=[]
  listaCubic:Cubiculo[]=[]
  listaTemas:TicketTema[] = []
  listaArea:TicketArea[] = []
  TEMA:TicketTema//={idarea:0,title:'',desc:'',fav:0,esta:0,estb:false,favb:false}
  AREA:TicketArea={title:'',desc:'',est:'',cod:'',taod:0,taad:0,estb:false}
  TICKET:Ticket ={id:0,codUnic:'',ordendia:0,fecharegistro:'',fechacierre:'',area_id:0,tema_id:0,
  referenciahistoria:0,estado:'',evaluado:0,valoracion:0,comentario:'',usuarioresponsable:'',usuarioasignado:'',
  usuariocliente:''}
 
  public folder:any

  constructor(private activatedRoute: ActivatedRoute,private aRoute:ActivatedRoute,private toastr:ToastrService,
    private route:Router,
    private ticketService:TicketsServiceService) {
      this.ticketId = aRoute.snapshot.paramMap.get('id')
    this.dato = this.ticketId?.split("&",3)
    this.idArea = this.dato[1]
    this.idTema = this.dato[0]
    this.temaEsc = this.dato[2].substring(0,2).toUpperCase() + "-0"+this.idArea +"-0"+this.idTema;
    this.temaEsc.substring(1,2)
    this.TICKET.area_id=this.idArea
    this.TICKET.tema_id=this.idTema
     }

  ngOnInit(): void {
    
    let vari = document.cookie.split(";")
    console.log(vari);
    console.log(vari[1]);
    let cedula = vari[1].split("=")
    this.TICKET.usuariocliente=cedula[1]
    console.log(this.TICKET.usuariocliente);
    
    let fecha = Date();
    console.log(fecha);
    
    
    
    this.folder = this.activatedRoute.snapshot.paramMap.get('tickettema_id');
    console.log('obtener id de tema'+this.folder);
    //this.getArea()
    this.getTema()
    this.TICKET.codUnic=this.AREA.title + this.TEMA.title
    
    this.getCubicTema()
  }

  MenuTemas(){
    this.route.navigate(['temasFav'])
  }

  generarTicket(){
    let fecha:string = this.getFecha()
    let usuario:string = this.asignarTicket(this.listaCubicTemas)

    try {
    
    this.jsnData=`{"fx":"insertTick","d":{"id":10,"codigounico":"${this.temaEsc}","ordendia":1,"fecharegistro":"${fecha}","fechacierra":"2022-01-22","area_id":"${this.idArea}","tema_id":"${this.idTema}","referenciahistorica":0,"estado":"abierto","evaluado":0,"valoracion":0,"comentario":"ninguno","usuarioresponsable":${usuario},"usuarioasignado":${usuario},"usuariocliente":${this.TICKET.usuariocliente}}}`
    this.ticketService.getData(this.jsnData).subscribe(data=>{
      this.toastr.success("Ticket generado")

      this.route.navigate(['inicio'])
    },error =>{
      this.toastr.error("El ticket no se ha generado")
      
      console.log(error);
      
    })
  } catch (error) {
    this.toastr.warning("Inténtelo más tarde")
  }
  }

  

  getTema(){
    this.jsnData=`{"fx":"gtdTemas","d":{}}`
    this.ticketService.getData(this.jsnData).subscribe(data=>{
      let jsdata:any
      jsdata = data
      this.listaTemas = jsdata
      console.log(data);  
    },error=>{
      console.log(error);
      
    })

    this.listaTemas.forEach(element => {
      if (element.id==this.idTema) {
        this.TEMA =element
      }
    });
    console.log(this.TEMA);
    
  }
  
  /*getArea(){
    let jsnData=`{"fx":"gtdareasA","d":{}}`
     this.ticketService.getData(jsnData).subscribe(data=>{
      let jsdata:any
      jsdata = data
      this.listaArea = jsdata.data.item
      console.log(jsdata);
      //console.log(this.listaArea[2]);
      
      
      //this.ticketTareas = data
    },error =>{
      console.log(error);
      
    })
    for(let i = 0; i<this.listaArea.length;i++){
      if (this.listaArea[i].id==this.idArea) {
        this.AREA.title = this.listaArea[i].title
      }
      break
      
      
    }
    console.log(this.AREA);
    
  }*/

  getCubicTema()
  {
    
    this.jsnData= `{"fx":"gtdCubicsTema","d":{"tema":${this.idTema}}}`
    this.ticketService.getData(this.jsnData).subscribe(data=>{
      let jsdata:any
      jsdata = data
      this.listaCubicTemas = jsdata.data.item
      console.log(jsdata);
    },error =>{
      console.log(error);
      
    })
  }

  getFecha():string{
    let fecha = new Date();
    let dia = fecha.getDate()
    let mes = fecha.getMonth()
    let anio = fecha.getFullYear()
    let hora =fecha.getHours()
    let minutos = fecha.getMinutes()
    let seg = fecha.getSeconds()
     
    return `${anio}-${mes+1}-${dia} ${hora}:${minutos}:${seg}`;
  }
  asignarTicket(lista:any[]):string{
    let idUsuario:string 
    idUsuario = " "
    /**
     * proceso de asignacion
     */
    return "1"//`${idUsuario}`
  }
}
