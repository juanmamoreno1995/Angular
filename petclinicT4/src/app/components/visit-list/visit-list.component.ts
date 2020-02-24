import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Visits } from 'src/app/models/visits';
import { VisitService } from 'src/app/servicios/visit.service';
import { DatosService } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-visit-list',
  templateUrl: './visit-list.component.html',
  styleUrls: ['./visit-list.component.css']
})
export class VisitListComponent implements OnInit {
  @Input() visits;
  @Output() eliminado = new EventEmitter
  constructor(private http: HttpClient, private ruta: Router, private serVisi: VisitService, private datos:DatosService) { }

  ngOnInit() {
    console.log(this.visits)
  }

  deleteVisit(visit: Visits) {
    if (confirm("Deseas borrar la visita??"))
      this.serVisi.borrarVisit(visit.id).subscribe(datos => {
        console.log(datos)
        this.datos.guardarDatos(this.visits);
        this.eliminado.emit(datos);
        
      });
     
  }

}
