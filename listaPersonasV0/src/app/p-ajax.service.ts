import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {
  private url :string ="http://localhost/ajax/servidor.php";

  constructor(private http: HttpClient) { }
   listar(){
     var obj = {
       servicio:"listar"
     };
     return this.http.post(this.url, JSON.stringify(obj)); //stringify no hace falta

     //otra forma      return this.http.post(this.url, {"servicio":"listar"});


   }

}
