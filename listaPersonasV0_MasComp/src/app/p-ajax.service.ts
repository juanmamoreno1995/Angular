import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Personas } from './personas';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {
 // private url :string ="http://localhost/ajax/servidor.php"; //claes
  private url :string = "http://localhost/ajax/servidor.php"; //casa
  
  constructor(private http: HttpClient) { }
  listar(){
    var obj={
      servicio:"listar"
    }
    return this.http.post<Personas[]>(this.url,JSON.stringify(obj));
  }

  anhadir(persona: Personas){
    var obj = {
      servicio:"insertar",
      dni: persona.dni,
      nombre: persona.nombre,
      apellidos:persona.apellidos
    }
    return this.http.post<Personas>(this.url, JSON.stringify(obj) )
  }

  borrar(id:number){
    var obj = {
     servicio:"borrar",
     id:id 
    }
    return this.http.post<Personas[]>(this.url, JSON.stringify(obj));
  }
  sel(id:number){
    console.log(id)
    var obj={
      servicio:"selPersonaID",
      id:id
    }
    return this.http.post<Personas>(this.url, JSON.stringify(obj));
  }

  modificar(p:Personas){
    var obj = {
      servicio:"modificar",
      id:p.id,
      dni: p.dni,
      nombre: p.nombre,
      apellidos:p.apellidos
    }
    return this.http.post<Personas[]>(this.url, JSON.stringify(obj));

  }
}
