import { Component, OnInit } from '@angular/core';
import { VetService } from 'src/app/servicios/vet.service';
import { Vet } from 'src/app/models/vet';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vet-detalles',
  templateUrl: './vet-detalles.component.html',
  styleUrls: ['./vet-detalles.component.css']
})
export class VetDetallesComponent implements OnInit {
  private idVet : number;
  private vete : Vet;
  constructor(private servVet: VetService, private ruta : Router, private parametro: ActivatedRoute) { 
    this.vete = <Vet>{};

  }

  ngOnInit() {
    this.idVet = this.parametro.snapshot.params["id"];
    this.servVet.obtenerVetid(this.idVet).subscribe(
      datos=>this.vete = datos,
      error=>console.log(error)
    );

    console.log(this.vete.specialties)
  }

}
