import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { TicketsServiceService } from 'src/app/services/tickets-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  USER:any = {correo:"",pass:""}
  cproceso: any = 'pro001';

  constructor(private serviceTicket:TicketsServiceService,
    private toastr:ToastrService, private authService: AuthService,
    private rout:Router) { }

    routeRedirect = '';

    login() {
      this.authService.login();
      this.routeRedirect = this.authService.urlUsuarioIntentaAcceder;
      this.authService.urlUsuarioIntentaAcceder = '';
      this.rout.navigate([this.routeRedirect]);
    }

  ngOnInit(): void {
  }

  validarLogin(){
    let jsData:any = `{"fx":"login","d":{"usd":"${this.USER.correo}","passd":"${this.USER.pass}"}}`
    
    //`{"fx":"login","d":{"usd":"${this.USER.correo}","passd":"${this.USER.pass}"}}`
    console.log(jsData);

  this.serviceTicket.getDataDEAD(jsData).subscribe(data=>{
    let jsdata:any
      jsdata = data
      let rc:number = jsdata.data.rcount
      console.log(rc);
      let tipoUser:any
      //tipoUser.document(1)
      document.cookie="usu=1"
      sessionStorage.setItem("tipoUser",jsdata.data.item.tipo)

      if (rc===1) {
        this.toastr.success("Bienvenido")
        this.rout.navigate(['turnos'])
      }else{ 
      this.toastr.error("Correo o contraseña incorrectos")
      //document.getElementById(elementId:"parte1").style.background="blue"
      }
  })

  

  
    
  }

}
