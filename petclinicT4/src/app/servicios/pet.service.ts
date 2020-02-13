import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private url = "http://localhost/ajax/petClinic/API/petclinic/servicios.php";

  constructor(private http: HttpClient) { }

  addType(pet: Pet){
    var param = JSON.stringify({
      accion: "AnadePet",
      pet: pet
    });

    return this.http.post<any>(this.url, param);
  }
}
