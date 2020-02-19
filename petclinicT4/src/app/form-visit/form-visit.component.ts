import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from '../servicios/pet.service';
import { Pet } from '../models/pet';
import { Visits } from '../models/visits';

@Component({
  selector: 'app-form-visit',
  templateUrl: './form-visit.component.html',
  styleUrls: ['./form-visit.component.css']
})
export class FormVisitComponent implements OnInit {
  private pet: Pet;
  private idPet: number;
  private vacio: boolean;
  private visita: Visits;

  constructor(private http: HttpClient, private ruta: Router, private parametro: ActivatedRoute, private servPet: PetService) {
    this.pet = <Pet>{};
    this.vacio = false;

    this.visita = <Visits>{};

  }

  anhadir() {
    console.log(this.visita);
  }



  ngOnInit() {

    this.idPet = this.parametro.snapshot.params["idPet"];
    console.log(this.idPet)
    this.servPet.unPet(this.idPet).subscribe(datos => {

      this.pet = datos;
      console.log(this.pet);
      this.vacio = true;
    })
  }

}
