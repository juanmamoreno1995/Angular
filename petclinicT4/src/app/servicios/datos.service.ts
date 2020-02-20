import { Injectable } from '@angular/core';
import { Visits } from '../models/visits';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private datos: Visits[];

  constructor() { 
    this.datos = [];
  }

  guardarDatos(datos){
    this.datos = datos;
  }

  leerDatos(){
    return this.datos;
  }
}
