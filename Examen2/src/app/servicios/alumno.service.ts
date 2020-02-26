import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../modelos/alumno';
import { Estadocivil } from '../modelos/estadocivil';
import { Sexo } from '../modelos/sexo';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private url = "http://localhost/ajax/Servicios/servicios.php";

  constructor(private http: HttpClient) { }

  getAlumnos() {
    var param = JSON.stringify({
      accion: 3
    });

    return this.http.post<Alumno[]>(this.url, param);
  }

  getSexo() {
    var param = JSON.stringify({
      accion: 5,
    });

    return this.http.post<Sexo[]>(this.url, param);
  }

  anhadirAlumno(alumno: Alumno) {
    var param = JSON.stringify({
      accion: 0,
      NOMBRE: alumno.NOMBRE,
      APELLIDOS: alumno.APELLIDOS,
      SEXO: alumno.SEXO,
      FECHA_NACIMIENTO: alumno.FECHA_NACIMIENTO,
      ESTADO_CIVIL: alumno.ESTADO_CIVIL

    });
    console.log(param)
    return this.http.post<Alumno[]>(this.url, param);
  }

  getAlumno(id: number) {
    var param = JSON.stringify({
      accion: 4,
      ID: id

    });
    console.log(param)
    return this.http.post<Alumno>(this.url, param);
  }

  modificarAlumno(alumno:Alumno){
    var param = JSON.stringify({
      accion: 1,
      ID: alumno.ID,
      NOMBRE: alumno.NOMBRE,
      APELLIDOS: alumno.APELLIDOS,
      SEXO: alumno.SEXO,
      FECHA_NACIMIENTO: alumno.FECHA_NACIMIENTO,
      ESTADO_CIVIL: alumno.ESTADO_CIVIL

    });
    console.log(param)
    return this.http.post<Alumno[]>(this.url, param);
  }
  borrar(id:number){
    var param = JSON.stringify({
      accion: 2,
      ID: id

    });
    console.log(param)
    return this.http.post<Alumno>(this.url, param);
  }
}
