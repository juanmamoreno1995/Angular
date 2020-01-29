import { Component, OnInit } from '@angular/core';
import { PAjaxService } from '../p-ajax.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Personas } from '../personas';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {
  
  private accion: any = { id: -1, nombre: "Insertar" };
 private persona : Personas;

  constructor(private serviciopAjax: PAjaxService, private ruta: Router, private route: ActivatedRoute) {
    this.persona = {
      id:-1,
      dni:"",
      nombre:"",
      apellidos:""
    }
  }

  anhadirOModificar() {
    var persona = {
      dni: this.persona.dni,
      nombre: this.persona.nombre,
      apellidos: this.persona.apellidos,
      id:this.accion.id
    }

    if (this.accion.id == -1) {
        this.serviciopAjax.anhadir(persona, this.accion).subscribe(datos => {
        })
    }else{
      this.accion.nombre = "Modificar"
      this.serviciopAjax.anhadir(persona, this.accion).subscribe(datos=>{
        console.log(this.accion)
      })
      this.accion = { id: -1, nombre: "Insertar" }
    }
    this.ruta.navigate(['/'])


  }



  ngOnInit() {
    //console.log(this.route.snapshot.params.id); funciona igual
    const personaID = this.route.snapshot.params["id"];
    console.log(personaID)
    if (personaID != -1) {
      this.serviciopAjax.seleccionarPersona(personaID).subscribe(datos => {
        console.log(datos);
        this.persona.dni = datos["dni"];
        this.persona.nombre = datos["nombre"];
        this.persona.apellidos = datos["apellidos"];
        this.accion = { id: personaID, nombre: "Modificar" };
      })
    }
  }

}
