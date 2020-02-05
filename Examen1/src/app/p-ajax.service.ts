import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {
  private url :string = "http://localhost/ajax/examen/servidor.php"; 

  constructor(private http: HttpClient) { }

  listar(){
    var obj = {
      servicio:"facturas"
    }
    return this.http.post(this.url, JSON.stringify(obj));
  }

  listaDetalles(id:number){
    var obj = {
      servicio:"detalle",
      id:id
    }

    return this.http.post(this.url, JSON.stringify(obj));
  }

  anhadir(fact : Object){
    console.log(fact);
    var obj ={
      servicio:"anade",
      detalle : fact
    }
    console.log(obj)

    return this.http.post(this.url, JSON.stringify(obj));
  }
  modificar(fact : Object){
    var obj ={
      servicio:"modifica",
      detalle : fact
    }
    console.log(fact)

    return this.http.post(this.url, JSON.stringify(obj));
  }

  borrar(id:number, idfac:number){
    var obj = {
      servicio: "borra",
      id:id,
      id_factura: idfac
    }
    console.log(obj)

    return this.http.post(this.url, JSON.stringify(obj));
  }
}
