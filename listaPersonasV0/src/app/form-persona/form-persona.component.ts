import { Component, OnInit } from '@angular/core';
import { PAjaxService } from '../p-ajax.service';
//import { Router }from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {
  private dni: string;
  private nombre: string;
  private apellidos: string;
  private accion: any = { id: 1, nombre: "anhadir" };


  constructor(private serviciopAjax: PAjaxService, private ruta: Router, private route: ActivatedRoute) {
  }

  anhadirOModificar() {
    if (this.accion.id == 1) {
        var persona = {
          dni: this.dni,
          nombre: this.nombre,
          apellidos: this.apellidos
        }
        this.serviciopAjax.anhadir(persona, this.accion).subscribe(datos => {

        })
    }else{
      this.serviciopAjax.modificar(this.dni, this.nombre, this.apellidos, this.accion.id).subscribe(datos=>{

      })
      this.accion = { id: -1, nombre: "anhadir" }
    }

  }



  ngOnInit() {
    //console.log(this.route.snapshot.params.id); funciona igual
    const personaID = this.route.snapshot.params["id"];
    console.log(personaID)
    if (personaID != -1) {
      this.serviciopAjax.seleccionarPersona(personaID).subscribe(datos => {
        console.log(datos);
        this.dni = datos.DNI;
        this.nombre = datos.NOMBRE;
        this.apellidos = datos.APELLIDOS;
        this.accion = { id: personaID, nombre: "modificar" };
      })
    }
  }

}
