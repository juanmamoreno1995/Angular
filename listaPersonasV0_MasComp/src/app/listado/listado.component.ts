import { Component, OnInit } from '@angular/core';
import { Personas } from '../personas';
import { PAjaxService } from '../p-ajax.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  private arrayPersonas: Personas[];


  constructor(private serviciopAjax: PAjaxService, private ruta: Router) {
    serviciopAjax.listar().subscribe(datos => {
      this.arrayPersonas = datos;
      console.log(this.arrayPersonas)
    })
  }
  borrar(persona: Personas) {
    if (confirm(`Deseas eliminar a ${persona.nombre} ${persona.apellidos} ??`)) {
      this.serviciopAjax.borrar(persona.id).subscribe(datos => {
        console.log(datos);
        this.arrayPersonas = datos;
      })
    }
  }

  irANuevaPersona() {
    this.ruta.navigate(['anhadir']);
  }
  seleccionar(p:Personas){
    console.log(p);
    this.ruta.navigate(["modificar/"+p.id]);
  }


  ngOnInit() {
  }

}
