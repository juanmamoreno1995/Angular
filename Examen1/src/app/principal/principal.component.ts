import { Component, OnInit } from '@angular/core';
import { PAjaxService } from '../p-ajax.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  private arrFacturas : Object;

  constructor(private servicioAjax : PAjaxService, private ruta: Router) { 
    servicioAjax.listar().subscribe(datos=>{
      console.log(datos);
      this.arrFacturas = datos;
    })
  }

  ngOnInit() {
  }

}
