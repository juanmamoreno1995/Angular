import { Component, OnInit } from '@angular/core';
import { PAjaxService } from '../p-ajax.service';
import { Router } from '@angular/router';
import { Personas } from '../personas';


@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {
  private persona: Personas;

  constructor(private servicioAjax: PAjaxService, private ruta: Router) {
    this.persona = {
      id: -1,
      dni: "",
      nombre: "",
      apellidos: ""
    }

  }
  anhadir(p: Personas) {
    console.log(p);
    this.servicioAjax.anhadir(p).subscribe(datos => {
      this.ruta.navigate([""]);
    })
  }



  ngOnInit() {

  }

}
