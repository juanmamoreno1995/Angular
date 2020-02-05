import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owners } from '../models/owners';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
   private url = "http://localhost/ajax/petClinic/API/petclinic/servicios.php";
  constructor( private http: HttpClient) { }

  getOwners(){
    var param = JSON.stringify({
      accion:"ListarOwners"
    });

    return this.http.post<Owners[]>(this.url, param);
  }
}
