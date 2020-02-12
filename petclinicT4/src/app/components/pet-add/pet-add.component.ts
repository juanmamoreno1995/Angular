import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { OwnerService } from 'src/app/servicios/owner.service';
import { Owners } from 'src/app/models/owners';
import { ActivatedRoute, Router } from '@angular/router';
import { PetTypesService } from 'src/app/servicios/pet-types.service';
import { Pettype } from 'src/app/models/pettype';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {
  private mascota: Pet;
  private owner: Owners;
  private arrType: Pettype[];
  constructor(private servOw : OwnerService, private parametro: ActivatedRoute, private ruta: Router, private serPet:PetTypesService) {
    this.mascota = <Pet>{};
    this.owner = <Owners>{}
   }

  ngOnInit() {
    var idOwner = this.parametro.snapshot.params["idOw"];
    this.servOw.getDetallesOwner(idOwner).subscribe(datos=>{
      this.owner = datos;
    });

    this.serPet.getType().subscribe(
      datos=>this.arrType = datos,
      error=>console.log(error)
    )
  }

  anhadir(){
    
  }

}
