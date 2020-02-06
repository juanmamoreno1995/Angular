import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vet } from '../models/vet';

@Injectable({
  providedIn: 'root'
})
export class VetService {
  private url = "http://localhost/ajax/petClinic/API/petclinic/servicios.php";

  constructor( private http: HttpClient) { }
  getVets(){
    var param = JSON.stringify({
      accion:"ListarVets"
    });

    return this.http.post<Vet[]>(this.url, param);
  }
}
