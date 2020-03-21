import { Component, OnInit } from '@angular/core';
import { SucesosService } from 'src/app/services/sucesosParanormales/sucesos.service';
import { SucesoParanormal } from 'src/app/models/suceso-paranormal';

@Component({
  selector: 'app-listar-sucesos',
  templateUrl: './listar-sucesos.component.html',
  styleUrls: ['./listar-sucesos.component.css']
})
export class ListarSucesosComponent implements OnInit {

  public arrSucesos:Array<SucesoParanormal>;

  constructor( private servSuceso: SucesosService) { }

  ngOnInit() {
    this.servSuceso.listarSucesos().subscribe(datos=>{
      console.log(datos);
      this.arrSucesos = datos;
    })
  }

}
