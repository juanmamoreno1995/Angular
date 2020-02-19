import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from '../servicios/pet.service';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-form-visit',
  templateUrl: './form-visit.component.html',
  styleUrls: ['./form-visit.component.css']
})
export class FormVisitComponent implements OnInit {
  private pet: Pet;
  private idPet:number;
  private vacio : boolean;
  
  constructor(private http: HttpClient, private ruta: Router, private parametro: ActivatedRoute, private servPet: PetService) {
    this.pet = <Pet>{};
    this.vacio = false;

  }

  ngOnInit() {
    this.idPet = this.parametro.snapshot.params["idPet"];
    this.servPet.unPet(this.idPet).subscribe(datos=>{
      this.pet = datos;
      console.log(this.pet);
      this.vacio = true;
    })
  }

}
