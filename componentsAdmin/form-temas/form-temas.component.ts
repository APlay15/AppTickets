import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TicketArea } from 'src/app/models/ticket_areas';
import { TicketTema } from 'src/app/models/ticket_tema';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';

declare var jQuery:any;
@Component({
  selector: 'app-form-temas',
  templateUrl: './form-temas.component.html',
  styleUrls: ['./form-temas.component.css']
})
export class FormTemasComponent implements OnInit {

  temasForm:FormGroup
  titulo='Temas'
  id:string | null
  data:any
  TEMA:TicketTema={idarea:0,title:'',desc:'',fav:0,esta:0,estb:false,favb:false}

  listAreas:TicketArea[]=[]
  jsDataA:any
  constructor(
    //private fbBuilder:FormBuilder, 
    private router:Router,
    private toastr:ToastrService,
    private serviceTicket:TicketsServiceService,
    private aRouter: ActivatedRoute) {

     }

  ngOnInit(): void {
    this.getAreas();
    //(<any>jQuery(document)).ready(function() {
 
      //console.log(jQuery("input[data-bootstrap-switch]")[0]);
      //console.log(jQuery(jQuery("input[data-bootstrap-switch]")[0]).prop('checked'));
      //jQuery(jQuery("input[data-bootstrap-switch]")[0]).bootstrapSwitch('state', jQuery(jQuery("input[data-bootstrap-switch]")[0]).prop('checked'));
    
      //var ctrls = jQuery("input[data-bootstrap-switch]");
      //console.log(ctrls);
      //console.log(ctrls.length);
      //for(var i=0;i<ctrls.length;i++)
      //{
       // jQuery(ctrls[i]).bootstrapSwitch('state', jQuery(jQuery("input[data-bootstrap-switch]")[i]).prop('checked'));
      //}
    
     // });
  }

  addTema({value}:{value:TicketArea}){
    this.jsDataA={fx:"insertTe",d:{idarea:this.TEMA.idarea,title:this.TEMA.title,desc:this.TEMA.desc,fav:this.TEMA.fav,esta:this.TEMA.esta}}

    console.log(value);

    this.serviceTicket.insertData(this.jsDataA).subscribe(data=>{
     
      this.toastr.success("Datos ingresados correctamente")
      
      this.router.navigate(['listaArea'])
      console.log("insertado");
      
      
    },error=>{
      this.toastr.error("Datos no ingresados")
      console.log(error);
      
    })
    console.log(this.TEMA);
  }

  getAreas(){
    this.jsDataA=`{"fx":"gtdareas","d":{}}`
    try {
      this.serviceTicket.getData(this.jsDataA).subscribe(data=>{
        let jsdata:any
        jsdata = data
        this.listAreas = jsdata.data.item
        console.log(jsdata);
        
      },error =>{
        console.log(error);
        
      })
    } catch (error) {
      console.log(error);
      
    }
    
  }

  addTemas(data:any){

  }

  onChangeck(v: any){
    console.log("hola mundo")
    this.TEMA.favb = !v; 
    this.TEMA.fav = this.TEMA.favb ? 1:0;
    return !v;
  }

  onChangeck2(v: any){
    console.log("hola mundo")
    this.TEMA.estb = !v; 
    this.TEMA.esta = this.TEMA.estb ? 1:0;
    return !v;
  }
}
