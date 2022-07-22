import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TicketArea } from 'src/app/models/ticket_areas';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';


@Component({
  selector: 'app-listar-areas',
  templateUrl: './listar-areas.component.html',
  styleUrls: ['./listar-areas.component.css']
})
export class ListarAreasComponent implements OnInit {
  a:any = { firstName:'', lastname:' 122222'};

  listAreas:TicketArea[]=[]
  jsData:any=`{"fx":"gtdareas","d":{}}`
  jsDataD:any={"fx":"deleteA","d":{"id":17}}
  
  constructor(private serviceTicket:TicketsServiceService,
    private toastr:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
      this.getAreas()      
  }

  getAreas(){
    try {
      
    
    this.serviceTicket.getData(this.jsData).subscribe(data=>{
      let jsdata:any
      jsdata = data
      this.listAreas = jsdata.data.item
      console.log(jsdata);
      
      //this.serviceTicket = data aqui esta el error le estas asignando una variable a la variable que tiene el modudo getdata
    },error =>{
      console.log("1");
      console.log(error);
      
    })

  } catch (error) {
    console.log("2");
    console.log(error);
    }
  }

  editArea(){

  }
  deleteArea(id?:number){
    console.log(id);
    let dato:any={fx:"deleteA",d:{id:id}}
    console.log(dato);
    
    try {
      this.serviceTicket.getData(this.jsDataD).subscribe(data=>{
        this.toastr.success("Dato elimindao")
        console.log(data);
        //aqui recibes el mensaje que si se elimino pero success te esta devolviendo false revisa eso en el webservice debe devolver true si se elimino
        //ya le reviso inge
        if (data.succes) {
          alert("se elimino el dato correctamente");
          this.getAreas();
        }
        console.log(data.message);
        
      },error=>{
        console.log("1");
        console.log(error);
  
      })
    } catch (error) {
      console.log(error);
      
    }
  }

}
