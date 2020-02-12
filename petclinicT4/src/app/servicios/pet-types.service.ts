import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pettype } from '../models/pettype';

@Injectable({
  providedIn: 'root'
})
export class PetTypesService {
  private url = "http://localhost/ajax/petClinic/API/petclinic/servicios.php";
  constructor(private http: HttpClient) { }

  getType(){
    var param = JSON.stringify({
      accion: "ListarPettypes"
    });

    return this.http.post<Pettype[]>(this.url, param);
  }

  addType(type: Pettype){
    var param = JSON.stringify({
      accion: "AnadePettype",
      pettype: type
    });

    return this.http.post<Pettype>(this.url, param);
  }
}
