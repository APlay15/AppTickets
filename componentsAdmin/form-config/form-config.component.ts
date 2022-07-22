import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Configuracion } from 'src/app/models/ticket_configuracion';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';

declare var jQuery:any;

@Component({
  selector: 'app-form-config',
  templateUrl: './form-config.component.html',
  styleUrls: ['./form-config.component.css']
})
export class FormConfigComponent implements OnInit {

  areaForm:FormGroup
  titulo='Configuración'
  id:string | null
  data:any
  jsDataIn:any
  configId:any
  CONFIG:Configuracion={cuposVir:0,cuposPre:0,showTele:0,estb:false}

  constructor(
    private router:Router,
    private toastr:ToastrService,
    private serviceTicket:TicketsServiceService,
    private aRoute: ActivatedRoute,
    
    ) {this.configId = aRoute.snapshot.paramMap.get('id') }
 
    

//jQuery:any;


ngOnInit(): void {

  //var ar:any = {estado:0}

  //ar.estado = field["estado"]===1?"si":"no";

  //tslint:disable-next-line:only-arrow-functions
  //(<any>jQuery(document)).ready(function() {
 
  //console.log(jQuery("input[data-bootstrap-switch]")[0]);
  //console.log(jQuery(jQuery("input[data-bootstrap-switch]")[0]).prop('checked'));
  //jQuery(jQuery("input[data-bootstrap-switch]")[0]).bootstrapSwitch('state', jQuery(jQuery("input[data-bootstrap-switch]")[0]).prop('checked'));

  //var ctrls = jQuery("input[data-bootstrap-switch]");
  //console.log(ctrls);
  //console.log(ctrls.length);
  //for(var i=0;i<ctrls.length;i++)
  //{
    //jQuery(ctrls[i]).bootstrapSwitch('state', jQuery(jQuery("input[data-bootstrap-switch]")[i]).prop('checked'));
  //}

  //});

  

  }

  addConfig({value}:{value:Configuracion}){

 
      // if (!value) {
         
       //}else{
   
       console.log(value);
   
       this.jsDataIn={fx:"insertC",d:{cuposVir:this.CONFIG.cuposVir,cuposPre:this.CONFIG.cuposPre,showTele:this.CONFIG.showTele}}
       this.serviceTicket.insertData(this.jsDataIn).subscribe(data=>{
         this.toastr.success("Datos ingresados correctamente")
         this.router.navigate(['listaConfig'])
         console.log("insertado");
         
         
       },error=>{
        this.toastr.error("Datos no ingresados")
         console.log(error);
         
       })
       console.log(this.CONFIG);
       
       
       //}
   
     
  }

  onChangeck(v: any){
    console.log("hola mundo")
    this.CONFIG.estb = !v; 
    this.CONFIG.showTele = this.CONFIG.estb ? 1:0;
    return !v;
  }

  


}
