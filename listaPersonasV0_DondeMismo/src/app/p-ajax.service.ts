import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personas } from "./personas";

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {
 // private url :string ="http://localhost/ajax/servidor.php"; //claes
  private url :string = "http://localhost/ajax/servidor.php"; //casa
  constructor(private http: HttpClient) { }
   listar(){
     var obj = {
       servicio:"listar"
     };
     return this.http.post<Personas[]>(this.url, JSON.stringify(obj)); //stringify no hace falta

     //otra forma      return this.http.post(this.url, {"servicio":"listar"});


   }

   borrar(id:number){
     var obj={
       servicio:"borrar",
       id:id
     }
     return this.http.post<Personas[]>(this.url, JSON.stringify(obj));
   }

   seleccionarPersona(id:any){
    var obj = {
      servicio : "selPersonaID",
      id:id
    }
    return this.http.post<Personas>(this.url, JSON.stringify(obj));
   }

   anhadir(persona:any, accion:any){
     var obj;
     if(accion.nombre == "Insertar"){
      obj={
        servicio:"insertar",
        dni:persona.dni,
        nombre:persona.nombre,
        apellidos:persona.apellidos
      }
      return this.http.post<Personas[]>(this.url, JSON.stringify(obj));
     } else{
      obj={
        servicio:"modificar",
        dni:persona.dni,
        nombre:persona.nombre,
        apellidos:persona.apellidos,
        id:accion.id
      }
      return this.http.post<Personas[]>(this.url, JSON.stringify(obj));
     }
   }
}
