import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../servicios/login.service";
import { UpdateMenuService } from "../../servicios/update-menu.service";
import { Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login: {email:string, clave:string};
	private loginIncorrecto: boolean = false;
	

  constructor(private servicioLogin: LoginService, private servicioUpdateMenu: UpdateMenuService, private ruta: Router) {
		this.login = {email:"rigo@mail.com", clave:""};
   }

  ngOnInit() {
  }
 
  validar(log) {
			console.log(log);
			
				//  Generamos el hash para la clave:
		const claveHash = CryptoJS.SHA3(log.clave).toString(CryptoJS.enc.Base64);
		console.log("hashClave = ", claveHash);
		log.clave = claveHash;

      //  Procedemos a la validación:
      this.servicioLogin.getLogin(log).subscribe(
        res => {
          console.log(res);
  
          //  Informamos y vamos a la pantalla de inicio.
          if ((res.estado) || (res.estado == "NO")) {
          //	alert("El correo o la clave son incorrectos");
            this.loginIncorrecto = true;
          } else { //  Iniciamos sesión:
            this.loginIncorrecto = false;
            
            //  Guardamos el JWT en el sesionStorage:
						localStorage.setItem("JWT", res.JWT);
						localStorage.setItem('nombreUsuario', res.nombre + " " + res.apellidos);

						this.servicioUpdateMenu.establecerLogin({login: true, usuario:localStorage.nombreUsuario});
						
            //  Vamos a inicio: 
						this.ruta.navigate(['/']);
          }
        },
        error => console.log(error)
      );
	}
		
	

}
