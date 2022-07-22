import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cubiculo } from 'src/app/models/cubiculo';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';

@Component({
  selector: 'app-form-cubiculo',
  templateUrl: './form-cubiculo.component.html',
  styleUrls: ['./form-cubiculo.component.css']
})
export class FormCubiculoComponent implements OnInit {

  cubicForm:FormGroup
  titulo='Agregar Cubículo'
  id:string | null
  data:any
  
  CUBIC:Cubiculo={numCubic:0,idUser:"",estado:"",estb:false}
  jsDataIn:any
  constructor(
    private router:Router,
    private toastr:ToastrService,
    private serviceTicket:TicketsServiceService,
    private aRouter: ActivatedRoute) 
    { 
 }

  ngOnInit(): void {
  }

  addCubic({value}:{value:Cubiculo}){
    console.log(value);

    this.jsDataIn={fx:"insertCu",d:{numCubic:this.CUBIC.numCubic,idUser:this.CUBIC.idUser,estado:this.CUBIC.estado}}
    this.serviceTicket.insertData(this.jsDataIn).subscribe(data=>{
     
      this.toastr.success("Datos ingresados correctamente")
      
      this.router.navigate(['listaCubiculo'])
      console.log("insertado");
      
      
    },error=>{
      this.toastr.error("Datos no ingresados")
      console.log(error);
      
    })
    console.log(this.CUBIC);
  }

  onChangeck(v: any){
    console.log("hola mundo")
    this.CUBIC.estb = !v; 
    this.CUBIC.estado = this.CUBIC.estb ? 'activo':'desactivado';
    return !v;
  }

}
