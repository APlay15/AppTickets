import { Component, OnInit } from '@angular/core';
import { Cubiculo } from 'src/app/models/cubiculo';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';


@Component({
  selector: 'app-listar-cubiculo',
  templateUrl: './listar-cubiculo.component.html',
  styleUrls: ['./listar-cubiculo.component.css']
})
export class ListarCubiculoComponent implements OnInit {

  listaCubic:Cubiculo[]=[]
  jsData:any=`{"fx":"gtdCubic","d":{}}`

  constructor(private ticketTareas:TicketsServiceService) { }

  ngOnInit(): void {
    this.getCubiculo()
  }
  deleteCubic(id?:number){

  }

  getCubiculo(){
    this.ticketTareas.getData(this.jsData).subscribe(data=>{
      let jsdata:any
      jsdata = data
      this.listaCubic = jsdata.data.item
      console.log(jsdata);
      
      this.ticketTareas = data
    },error =>{
      console.log(error);
      
    })
  }

}
