import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Propaganda } from 'src/app/models/propaganda';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';

@Component({
  selector: 'app-form-propagandas',
  templateUrl: './form-propagandas.component.html',
  styleUrls: ['./form-propagandas.component.css']
})
export class FormPropagandasComponent implements OnInit {

  propaForm:FormGroup
  titulo='Propaganda'
  tipoProp=''
  id:string | null
  data:any
  jsDataIn:any
  valorseleccionado:any = 'vid'

  PROP:Propaganda={url:'',tipo:'',est:'',tiempo:0,estb:false}
  constructor(
    
    private router:Router,
    private toastr:ToastrService,
    private serviceTicket:TicketsServiceService,
    private aRouter: ActivatedRoute) { 
     /* this.propaForm=this.fbBuilder.group({
        
        nombre:['',Validators.required],
        estado:['',Validators.required],
        codigo:['',Validators.required],
        asigdia:['',Validators.required],
      })
      this.id = aRouter.snapshot.paramMap.get('id')*/
    }

  ngOnInit(): void {
  }

  getTipProp(event:any){
    this.tipoProp = event.target.value
    console.log(this.tipoProp);
    return this.tipoProp
    
}
  addPropa({value}:{value:Propaganda}){

    this.jsDataIn={"fx":"insertP","d":{"url":this.PROP.url,"tipo":this.PROP.tipo,"est":this.PROP.est,"tiempo":this.PROP.tiempo}}
    this.serviceTicket.insertData(this.jsDataIn).subscribe(data=>{
      this.toastr.success("Datos ingresados correctamente")
      this.router.navigate(['listaPropaganda'])
      console.log("insertado");
      
      
    },error=>{
      this.toastr.error("Datos no ingresados")
      console.log(error);
      
    })
  
    }

    onChangeck(v: any){
      console.log("hola mundo")
      this.PROP.estb = !v; 
      this.PROP.est = this.PROP.estb ? 'activo':'desactivado';
      return !v;
    }

}
