import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/models/pet';
import { OwnerService } from 'src/app/servicios/owner.service';
import { Owners } from 'src/app/models/owners';
import { ActivatedRoute, Router } from '@angular/router';
import { PetTypesService } from 'src/app/servicios/pet-types.service';
import { Pettype } from 'src/app/models/pettype';
import { PetService } from 'src/app/servicios/pet.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {
  private mascota: Pet;
  private owner: Owners;
  private arrType: Pettype[];
  private idOwner: number;
  private idPet: number;
  private texto: string = "Añadir";
  constructor(private servOw: OwnerService, private parametro: ActivatedRoute, private ruta: Router, private serPety: PetTypesService, private serPet: PetService) {
    this.mascota = <Pet>{};
    this.owner = <Owners>{}

  }

  ngOnInit() {
    this.idOwner = this.parametro.snapshot.params["idOw"];
    this.servOw.getDetallesOwner(this.idOwner).subscribe(datos => {
      this.owner = datos;
    });

    this.serPety.getType().subscribe(
      datos => {
        this.arrType = datos
        
      }
    );

    this.idPet = this.parametro.snapshot.params["idPet"];
    console.log(this.idPet);
    if (this.idPet != -1)
      this.serPet.unPet(this.idPet).subscribe(datos => {
        this.mascota = datos;
        this.mascota.type = environment.seleccionaObj(this.arrType, this.mascota.type);
        this.texto = "Modificar"
      });

  }

  anhadir(pet) {
    this.mascota.owner = this.owner;
    console.log(this.mascota)
    if (this.idPet == -1) {

      this.serPet.addType(this.mascota).subscribe(datos => {
        console.log(datos);
        if (datos.result == "OK")
          alert("Mascota añadida con éxito")
        else alert("Error al añadir")

        this.ruta.navigate(["/detalles-owner/" + this.idOwner])
      });
    } else {

      this.serPet.modificarPet(this.mascota).subscribe(datos => {
        console.log(datos);
        if (datos.result == "OK")
          alert("Mascota modificada con éxito")
        else alert("Error al modificar")

        this.ruta.navigate(["/detalles-owner/" + this.idOwner])
      });
    }
  }

}
