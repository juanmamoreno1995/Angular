import { Component, OnInit } from '@angular/core';
import {PAjaxService} from '../p-ajax.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public datos : any = null;
  public listaPer: Object[];

  constructor(private serviciopAjax : PAjaxService) {
    this.serviciopAjax.listar().subscribe(datos =>{
      console.log(datos);
      this.pintaPersonas(datos);
    })
   }

   pintaPersonas(datos : any){
     console.log(datos)
     this.listaPer = datos;
   }

  ngOnInit() {
  }

}
