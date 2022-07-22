import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cubiculo } from 'src/app/models/cubiculo';
import { CubicTema } from 'src/app/models/ticket_cubic_temas';
import { TicketTema } from 'src/app/models/ticket_tema';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';

@Component({
  selector: 'app-form-cubic-temas',
  templateUrl: './form-cubic-temas.component.html',
  styleUrls: ['./form-cubic-temas.component.css']
})
export class FormCubicTemasComponent implements OnInit {

  areaForm:FormGroup
  titulo='Cubículos Temas'
  id:string | null
  data:any

  jsDataTemas:any=`{"fx":"gtdTemas","d":{}}`
  jsDataCubi:any= `{"fx":"gtdCubic","d":{}}`
  jsData:any
  cubicTema:CubicTema={cubiculo:1,tema:1}

  listaCubiculos:Cubiculo[]=[]
  listaTemas:TicketTema[]=[]
  constructor(private router:Router,
    private toastr:ToastrService,
    private serviceTicket:TicketsServiceService) { }

  ngOnInit(): void {
    this.getTemas()
    this.getCubiculos()
  }

  async getCubiculos(){
    try {

      this.serviceTicket.getData(this.jsDataCubi).subscribe(data=>{
      
        let jsdata:any
      jsdata = data
        this.listaCubiculos = jsdata.data.item
      },error =>{
        console.log("1");
        console.log(error);
        
      })
      
      
    } catch (error) {
      console.log("2");
    console.log(error);
    }

  }
  async getTemas(){
    
    try {

      this.serviceTicket.getData(this.jsDataTemas).subscribe(data=>{
        let jsdata:any
        jsdata = data
        this.listaTemas = jsdata.data.item
        console.log(jsdata);
        
        this.serviceTicket = data
      },error =>{
        console.log("1");
        console.log(error);
        
      })
      
      
    } catch (error) {
      console.log("2");
    console.log(error);
    }
    

  }
   addCubicTema({value}:{value:CubicTema}){
    console.log(value);
    console.log(this.cubicTema.cubiculo);
    console.log(this.cubicTema.tema);
    this.jsData=`{"fx":"insertCT","d":{"cubiculo":${this.cubicTema.cubiculo},"tema":${this.cubicTema.tema}}}`
    console.log(this.jsData) 
    try {
    this.serviceTicket.getData(this.jsData).subscribe(data=>{
      this.toastr.success("Datos ingresados correctamente")
      this.router.navigate(['listaCubicTema'])
      console.log("insertado");
    },error=>{
      this.toastr.error("Datos no ingresados")
      console.log(error);
      
    })  
    } catch (error) {
      this.toastr.error("Datos no ingresados")
      console.log(error);
      
    }
  }

}
