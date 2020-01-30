import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  public miArray: string[];
  public arrayMorenazo = new Array();
  public arrayMorenazo2: any[];
  constructor() {
    this.miArray = ["pim", "pam", "pum"];
    this.arrayMorenazo2 = ["si no pongo", "any no podria", "meter esto"];

  }

  mensaje(texto: string) {
    alert(texto);
  }
}