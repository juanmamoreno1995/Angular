import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

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
     return this.http.post(this.url, JSON.stringify(obj)); //stringify no hace falta

     //otra forma      return this.http.post(this.url, {"servicio":"listar"});


   }

   borrar(id:number){
     var obj={
       servicio:"borrar",
       id:id
     }
     return this.http.post(this.url, JSON.stringify(obj));
   }

   seleccionarPersona(id:any){
    var obj = {
      servicio : "selPersonaID",
      id:id
    }
    return this.http.post(this.url, JSON.stringify(obj));
   }

   anhadir(persona:any, accion:any){
     if(accion.nombre == "anhadir"){
      var obj={
        servicio:"insertar",
        dni:persona.dni,
        nombre:persona.nombre,
        apellidos:persona.apellidos
      }
      return this.http.post(this.url, JSON.stringify(obj));
     }else{

     }
   }
   modificar(dni:string, nombre:string, apellidos:string, id:number){
    var obj={
      servicio:"modificar",
      dni:dni,
      nombre:nombre,
      apellidos:apellidos,
      id:id
    }
    return this.http.post(this.url, JSON.stringify(obj));
   }

}
