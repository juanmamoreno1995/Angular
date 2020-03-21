import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SucesoParanormal } from 'src/app/models/suceso-paranormal';
import { environment  } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SucesosService {

  constructor(private http: HttpClient) { }
  url: string = environment.url;

  listarSucesos(){
    var param = JSON.stringify({
      accion: "listarSucesos"
    });

    return this.http.post<SucesoParanormal[]>(this.url, param);
  }
}
