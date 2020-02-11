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

  getDetallesOwner(id:number){
    var param = JSON.stringify({
      accion:"ObtenerOwnerId",
      id: id
    });

    return this.http.post<Owners>(this.url, param);
  }

  anhadirOModOwner(owner:Owners){
    var param = JSON.stringify({
      accion:"AnadeOwner",
      owner:owner
    });

    return this.http.post<any>(this.url, param);
  }

  borrar(id:number){
    var param = JSON.stringify({
      accion:"BorraOwner",
      id:id,
      listado: "OK"
    });
    return this.http.post<Owners[]>(this.url, param);
  }
}
