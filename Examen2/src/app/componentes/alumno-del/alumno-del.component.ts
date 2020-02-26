import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
import { HttpClient } from '@angular/common/http';
import { AlumnoService } from 'src/app/servicios/alumno.service';

@Component({
  selector: 'app-alumno-del',
  templateUrl: './alumno-del.component.html',
  styleUrls: ['./alumno-del.component.css']
})
export class AlumnoDelComponent implements OnInit {

  constructor(private http: HttpClient, private servAl: AlumnoService) { }
  @Input() alumno: Alumno;
  @Output() eliminado = new EventEmitter;

  ngOnInit() {
    console.log(this.alumno);

  }
  borrar() {
    this.servAl.borrar(this.alumno.ID).subscribe(datos => {
      this.eliminado.emit(datos)
    })

  }
  cancelar(){
    this.eliminado.emit()
  }

}
