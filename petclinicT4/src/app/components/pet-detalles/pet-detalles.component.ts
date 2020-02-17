import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { Owners } from 'src/app/models/owners';
import { PetService } from 'src/app/servicios/pet.service';
import { OwnerService } from 'src/app/servicios/owner.service';

@Component({
  selector: 'app-pet-detalles',
  templateUrl: './pet-detalles.component.html',
  styleUrls: ['./pet-detalles.component.css']
})
export class PetDetallesComponent implements OnInit {
  private arrPet: Pet[];
  constructor(private http: HttpClient, private ruta: Router, private parametro: ActivatedRoute, private servPet: PetService) { }
  @Input() pet: Pet;
  @Input() owner: Owners;

  ngOnInit() {
    console.log(this.owner)
  }

  borrarPet(pet: Pet) {
    console.log(pet);
    if (confirm(`¿Deseas borrar la mascota ${pet.name}?`)) {
      this.servPet.borrarPets(pet.id).subscribe(datos => {
        if (datos.result == "OK"){
          alert("Mascota borrada con éxito")
          this.ruta.navigate(["detalles-owner/"+this.owner.id]);
        }
        else alert("Error al borrar mascota")
      });
      
    }
  }

  modPet(pet:Pet){
    this.ruta.navigate(["add-pet/"+pet.id+"/"+this.owner.id]);
  }

}
