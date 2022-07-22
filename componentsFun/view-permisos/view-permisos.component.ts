import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PermisosU } from 'src/app/models/permisosUsu';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';




@Component({
  selector: 'app-view-permisos',
  templateUrl: './view-permisos.component.html',
  styleUrls: ['./view-permisos.component.css']
})
export class ViewPermisosComponent implements OnInit {

  page = 1;
  pageSize = 4;
  collectionSize:number
  //countries: Country[];
  listaPermisos:PermisosU[]
  jsnData:any

  constructor(private serviceTicket:TicketsServiceService,
    private toastr:ToastrService,
    private router:Router) { 
  }

  ngOnInit(): void {
    
    this.getPermisos()
    this.refreshCountries();

    
  }

  refreshCountries() {
    let listapermisos = this.listaPermisos 
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  getPermisos(){
    this.jsnData = `{"fx":"gtdPermisos","d":{}}`
    try {
      this.serviceTicket.getData(this.jsnData).subscribe(data=>{
        let jsdata:any
        jsdata = data
        this.listaPermisos = jsdata.data.item
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
      this.collectionSize = this.listaPermisos.length;

  }
}
