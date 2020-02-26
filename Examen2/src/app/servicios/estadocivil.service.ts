import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estadocivil } from '../modelos/estadocivil';

@Injectable({
  providedIn: 'root'
})
export class EstadocivilService {
  private url = "http://localhost/ajax/Servicios/servicios.php";

  constructor(private http: HttpClient) { }

  getEstadosCiviles(){
    var param = JSON.stringify({
      accion: 9
    });

    return this.http.post<Estadocivil[]>(this.url, param);
  }
  
}
