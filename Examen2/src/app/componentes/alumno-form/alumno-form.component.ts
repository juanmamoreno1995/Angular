import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/servicios/alumno.service';
import { EstadocivilService } from 'src/app/servicios/estadocivil.service';
import { Alumno } from 'src/app/modelos/alumno';
import { Estadocivil } from 'src/app/modelos/estadocivil';
import { Sexo } from 'src/app/modelos/sexo';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  private alumno: Alumno;
  private arrSexo: Array<Sexo>;
  private arrCivil: Array<Estadocivil>;
  private estCivil: Estadocivil;
  private sexo: Sexo;
  private idAl: number;
  private texto : string;

  constructor(private servAl: AlumnoService, private serEst: EstadocivilService, private ruta: Router, private parametro: ActivatedRoute) {
    this.alumno = <Alumno>{};
    this.estCivil = <Estadocivil>{};
    this.sexo = <Sexo>{};
    this.texto = "Añadir"
  }

  ngOnInit() {
    
    this.idAl = this.parametro.snapshot.params["id"];
    this.serEst.getEstadosCiviles().subscribe(datos => {
      this.arrCivil = datos;
      console.log("array de estados civiles", datos)
    });

    this.servAl.getSexo().subscribe(datos => {
      this.arrSexo = datos;
      console.log("Array de sexos", datos)
    });

    if (this.idAl != -1) {
      this.texto = "Modificar"
      this.servAl.getAlumno(this.idAl).subscribe(datos => {
        this.alumno = datos;
      })
    }
  }

  anhadir(al: Alumno) {
    console.log(this.alumno, this.sexo, this.estCivil);
    this.alumno.SEXO = this.sexo.CODIGO;
    this.alumno.ESTADO_CIVIL = this.estCivil.ID;
    console.log("alumno para peticion", this.alumno);

    if (this.idAl == -1) {
      
      this.servAl.anhadirAlumno(this.alumno).subscribe(datos => {
        this.ruta.navigate(["/listaAl"]);
      })
    } else {
      
      this.servAl.modificarAlumno(this.alumno).subscribe(datos => {
        this.ruta.navigate(["/listaAl"]);
      })


    }
  }



}
