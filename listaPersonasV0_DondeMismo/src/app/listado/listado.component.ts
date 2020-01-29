import { Component, OnInit } from '@angular/core';
import {PAjaxService} from '../p-ajax.service';
import { Router }from '@angular/router';
import { Personas } from '../personas';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  public listaPer: Personas[];

  constructor(private serviciopAjax : PAjaxService, private ruta: Router) {
    this.serviciopAjax.listar().subscribe(datos =>{
      console.log(datos);
      this.pintaPersonas(datos);
    })
   }

   pintaPersonas(datos : Personas[]){
     console.log(datos)
     this.listaPer = datos;
   }
   borrar(personas:Personas){
     console.log(personas["nombre"]);
     if(confirm("¿Deseas borrar a "+personas["nombre"]+" "+personas["apellidos"])){
        this.serviciopAjax.borrar(personas["id"]).subscribe(datos=>{
          this.pintaPersonas(datos);
        })
     }
   }

   irANuevaPersona(){
     
    this.ruta.navigate(['personas-add/-1'])
   }
   selec(personas:any){
    this.ruta.navigate(['personas-add/'+personas.id])
   }

  ngOnInit() {
  }

}
