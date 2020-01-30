import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';

@Component({
  selector: 'juanma',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.less']
})
export class InicioComponent implements OnInit {
  private datos1;
  private arrayDeInicio: any[];
  private muestraParr : boolean = false;

  constructor(private miServicio: MiServicioService) {
    this.datos1 = miServicio.miArray;

  }

  ngOnInit() {
    this.arrayDeInicio = this.miServicio.arrayMorenazo2;
  }

  llamada() {
    //alert(this.miServicio.arrayMorenazo2);
    this.miServicio.mensaje("Que pasa bro");
    this.muestraParr = true;
  }

}
