import { Component, OnInit } from '@angular/core';
import { PersonasService } from "../../servicios/personas.service";
import { UpdateMenuService } from "../../servicios/update-menu.service";
import { Router } from '@angular/router';

import { LoginService } from "../../servicios/login.service";

 
@Component({
  selector: 'app-personas-anade',
  templateUrl: './personas-anade.component.html',
  styleUrls: ['./personas-anade.component.css']
})
export class PersonasAnadeComponent implements OnInit {

	private persona: {dni:string, nombre:string, apellidos:string, imagen:string, imagenRedu: string};
	private imagenRedu: string = null;

	constructor(private servicioPersonas: PersonasService, private servicioUpdateMenu: UpdateMenuService, 
									private ruta: Router, private servicioLogin: LoginService) {
		this.persona = {
			dni:"",
			nombre:"",
			apellidos:"",
			imagen:null,
			imagenRedu: null
		}
	 }

  ngOnInit() {  //  Con esto evitamos que intente añadir uno nuevo (sin haber hecho login) poniendo la dirección en la url,
		//  Validamos el JWT que pudiera haber en localhost:
		if ((!localStorage.JWT) || ((localStorage.JWT.split(".").length != 3))) {
			//  No hay JWT, o no tiene el formato correcto.
			//  Vamos a inicio:
			this.ruta.navigate(['login']);
		} else {
			this.servicioLogin.validarLogin().subscribe(
				res =>{
					console.log("validar: ", res);
					if (!res.servicio) {  //  Si no devuelve servicio, es que el JWT NO es válido.
						//  Vamos a inicio:
						this.ruta.navigate(['login']);
					}
				},
				error => console.log(error)
			);
		}
	}
	
	validar(log) {
		log.imagen = this.persona.imagen;
		log.imagen_redu = this.persona.imagenRedu;
		console.log(log);

		//  Añadimos una nueva persona:
		this.servicioPersonas.anadir(log).subscribe(
			res=>{
				if ((res.sesion) && (res.sesion == "NO")) {
					//  No se ha iniciado sesión, nos vamos al login:
					localStorage.JWT = "";
					localStorage.nombreUsuario = "";
					//  Actualizamos el menú principal:
					this.servicioUpdateMenu.establecerLogin({login: false, usuario:""});
					//  Vamos a inicio:
					this.ruta.navigate(['login']);
				} else {
					alert("Persona añadida PERFECTAMENTE!!!!");
					//  Vamos a la lista de personas:
					this.ruta.navigate(['personas-listar']);
				}
			},
			error=>console.log(error)
		);
	}



	leerImagen(ficheros){
		// Cogemos el primer archivo
		const archivo = ficheros[0];
		// Creamos la instancia de FileReader
		let reader = new FileReader();
		//  Hacemos un apuntador a persona:
		let persona = this.persona;
		let creaImagenRedu = this.creaImagenRedu;
		
		reader.onload = function(){
			persona.imagen = (<string>reader.result).split(",")[1];
			//  Creamos la imagen reducida:
			creaImagenRedu(persona.imagen, persona);
		}
		reader.readAsDataURL(archivo);
	}

	creaImagenRedu(datos, persona:any){
		let imagen = new Image();
		imagen.onload = ()=> {
		//  Creamos el canvas:
		let canvasRedu = document.createElement('canvas');
		let ctxRedu = canvasRedu.getContext("2d");
		//  Le damos unas dimensiones:
		canvasRedu.width = 100;
		canvasRedu.height = 100;
		ctxRedu.drawImage(imagen, 0, 0, canvasRedu.width, canvasRedu.height);
		console.log("imagen reducidad: ", canvasRedu.toDataURL("image/jpeg").split(",")[1])
		persona.imagenRedu = canvasRedu.toDataURL("image/jpeg").split(",")[1];
		}
    imagen.src = "data:image/jpeg;base64," + datos;
	}

}
