import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {

  
  private urlPersonajes: string = "https://swapi.co/api/people/?format=json";

  constructor(private http: HttpClient) { }

  peti(){
    console.log("TOY EN MI PETI");
    return this.http.get(this.urlPersonajes);
    // return this.http.get<{res:Object}>(this.urlPersonajes);
  }

  petiSigAnt(url:string){
    return this.http.get(url);
  }

  
}
