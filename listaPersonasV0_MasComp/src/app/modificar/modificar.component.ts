import { Component, OnInit } from '@angular/core';
import { PAjaxService } from '../p-ajax.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Personas } from '../personas';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  private persona: Personas;
  private idPersona : number;
  constructor(private servicioAjax: PAjaxService, private ruta: Router, private parametros: ActivatedRoute) {
   this.persona={
     id:-1,
     dni:"",
     nombre:"",
     apellidos:""
   }
   this.idPersona = -1;

  }

  modificar(p:Personas){
    console.log(p);
    p.id = this.idPersona;
    this.servicioAjax.modificar(p).subscribe(datos=>{
      this.ruta.navigate(["/"])
    })
  }

  ngOnInit() {
    this.idPersona = this.parametros.snapshot.params["id"];
    console.log(this.idPersona);
    if (this.idPersona != -1) {
      this.servicioAjax.sel(this.idPersona).subscribe(datos => {
        console.log(datos);
        this.persona.dni = datos["dni"];
        this.persona.nombre = datos["nombre"];
        this.persona.apellidos = datos["apellidos"];
      })
    }
  }

}
