import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
import { AlumnoService } from 'src/app/servicios/alumno.service';

@Component({
  selector: 'app-alumnos-listado',
  templateUrl: './alumnos-listado.component.html',
  styleUrls: ['./alumnos-listado.component.css']
})
export class AlumnosListadoComponent implements OnInit {

  private arrAlum: Array<Alumno>;
  private numAl: number = 0;
  private mostrar: boolean = false;
  private alumno: Alumno;
  constructor(private servAl: AlumnoService) {
    this.alumno = <Alumno>{}
  }

  ngOnInit() {
    this.servAl.getAlumnos().subscribe(datos => {
      console.log(datos),
        this.arrAlum = datos;
      this.numAl = this.arrAlum.length;
    });

  }
  borrar(alum: Alumno) {
    console.log(alum);
    this.alumno = alum;
    this.mostrar = true;

  }

  Actualizar(datos) {
    console.log(datos);
    if (datos == null)
      this.mostrar = false;
    else {

      this.arrAlum = datos;
      this.numAl = this.arrAlum.length;
      this.mostrar = false;

    }


  }

}
