import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { AreasComponent } from 'src/app/componentClient/areas/areas.component';
import { TicketArea } from 'src/app/models/ticket_areas';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';

declare var jQuery:any;
@Component({
  selector: 'app-form-areas',
  templateUrl: './form-areas.component.html',
  styleUrls: ['./form-areas.component.css']
})
export class FormAreasComponent implements OnInit {

  areaForm:FormGroup
  titulo='Agregar Area'
  id:string | null
  data:any
  jsDataIn:any
  show = false;


  AREA:TicketArea={title:'',desc:'',est:'',cod:'',taod:0,taad:0,estb:false}
  


  a:any = { firstName:'', lastname:' 122222'};
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private serviceTicket:TicketsServiceService
    ) 
    { 
      
    }

  ngOnInit(): void {

    (<any>jQuery(document)).ready(function() {
 
      //console.log(jQuery("input[data-bootstrap-switch]")[0]);
      //console.log(jQuery(jQuery("input[data-bootstrap-switch]")[0]).prop('checked'));
      //jQuery(jQuery("input[data-bootstrap-switch]")[0]).bootstrapSwitch('state', jQuery(jQuery("input[data-bootstrap-switch]")[0]).prop('checked'));
    
      // var ctrls = jQuery("input[data-bootstrap-switch]");
      //console.log(ctrls);
      //console.log(ctrls.length);
      /* for(var i=0;i<ctrls.length;i++)
      {
        jQuery(ctrls[i]).bootstrapSwitch('state', jQuery(jQuery("input[data-bootstrap-switch]")[i]).prop('checked'));
      } */
    
      });
      this.toastr.error("Verifique los datos ingresados")

  }
  close() {
    //this.show = false;
    setTimeout(() => this.show = true, 4000);
  }

  addAreas({value}:{value:TicketArea}){

   // if (!value) {
      
    //}else{

    console.log(value);

    this.jsDataIn={fx:"insertA",d:{title:this.AREA.title,desc:this.AREA.desc,est:this.AREA.est,cod:this.AREA.cod,taod:this.AREA.taod,taad:this.AREA.taad}}
    this.serviceTicket.insertData(this.jsDataIn).subscribe(data=>{
     
      this.toastr.success("Datos ingresados correctamente")
      
      this.router.navigate(['listaArea'])
      console.log("insertado");
      
      
    },error=>{
      this.toastr.error("Datos no ingresados")
      console.log(error);
      
    })
    console.log(this.AREA);
    
    
    //}

  }
onChangeck(v: any){
  console.log("hola mundo")
  this.AREA.estb = !v; 
  this.AREA.est = this.AREA.estb ? 'activo':'desactivado';
  return !v;
}
}
