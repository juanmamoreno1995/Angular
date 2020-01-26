import { Component, OnInit } from '@angular/core';
import {PAjaxService} from '../p-ajax.service';
import { Router }from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  public listaPer: any;

  constructor(private serviciopAjax : PAjaxService, private ruta: Router) {
    this.serviciopAjax.listar().subscribe(datos =>{
      console.log(datos);
      this.pintaPersonas(datos);
    })
   }

   pintaPersonas(datos : any){
     console.log(datos)
     this.listaPer = datos;
   }
   borrar(i:number){
     console.log(this.listaPer[i].NOMBRE);
     console.log(i)
     if(confirm("¿Deseas borrar a "+this.listaPer[i].NOMBRE+" "+this.listaPer[i].APELLIDOS)){
        this.serviciopAjax.borrar(this.listaPer[i].ID).subscribe(datos=>{
          this.pintaPersonas(datos);
        })
     }
   }

   irANuevaPersona(){
     
    this.ruta.navigate(['personas-add/-1'])
   }
   selec(personas:any){
    this.ruta.navigate(['personas-add/'+personas.ID])
   }

  ngOnInit() {
  }

}
