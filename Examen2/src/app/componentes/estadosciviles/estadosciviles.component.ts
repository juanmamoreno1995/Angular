import { Component, OnInit } from '@angular/core';
import { Estadocivil } from 'src/app/modelos/estadocivil';
import { EstadocivilService } from 'src/app/servicios/estadocivil.service';


@Component({
  selector: 'app-estadosciviles',
  templateUrl: './estadosciviles.component.html',
  styleUrls: ['./estadosciviles.component.css']
})
export class EstadoscivilesComponent implements OnInit {

  private arrCivil: Array<Estadocivil>;
  private numEs: number = 0;
  constructor(private servEstado: EstadocivilService) {

  }



  ngOnInit() {
    this.servEstado.getEstadosCiviles().subscribe(datos => {
      console.log(datos);
      this.arrCivil = datos;
      this.numEs = this.arrCivil.length;
    })
  }

}
