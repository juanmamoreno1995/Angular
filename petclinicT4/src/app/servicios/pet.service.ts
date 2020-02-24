import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../models/pet';
import { Owners } from '../models/owners';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private url = "http://localhost/ajax/petClinic/API/petclinic/servicios.php";

  constructor(private http: HttpClient) { }

  listarPets(id: number) {
    var param = JSON.stringify({
      accion: "ListarPetsOwnerId",
      id: id
    });

    return this.http.post<Pet[]>(this.url, param);
  }

  addType(pet: Pet) {
    var param = JSON.stringify({
      accion: "AnadePet",
      pet: pet
    });

    return this.http.post<any>(this.url, param);
  }

  obtenerPets(id: number) {
    var param = JSON.stringify({
      accion: "ObtenerOwnerId_Pets",
      id: id
    });

    return this.http.post<Owners>(this.url, param);
  }

  borrarPets(id: number) {
    var param = JSON.stringify({
      accion: "BorraPet",
      id: id
    });
    
    return this.http.post<any>(this.url, param);
  }

  unPet(id: number) {
    var param = JSON.stringify({
      accion: "ObtenerPetId",
      id: id
    });

    return this.http.post<Pet>(this.url, param);
  }

  modificarPet(pet:Pet){
    var param = JSON.stringify({
      accion: "ModificaPet",
      pet: pet
    });

    return this.http.post<any>(this.url, param);
  }
}
