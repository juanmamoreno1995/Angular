import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visits } from '../models/visits';

@Injectable({
  providedIn: 'root'
})
export class VisitService {
  private url = "http://localhost/ajax/petClinic/API/petclinic/servicios.php";

  constructor( private http: HttpClient) { }

  AnadeVisit(visita : Visits){
    var param = JSON.stringify({
      accion:"AnadeVisit",
      visit: visita
    });

    return this.http.post<any>(this.url, param);
  }

  borrarVisit(id:number){
    var param = JSON.stringify({
      accion:"BorraVisit",
      id: id
    });

    return this.http.post<any>(this.url, param);
  }
}
