import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/servicios/owner.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Owners } from 'src/app/models/owners';
import { PetService } from 'src/app/servicios/pet.service';

@Component({
  selector: 'app-owner-detalles',
  templateUrl: './owner-detalles.component.html',
  styleUrls: ['./owner-detalles.component.css']
})
export class OwnerDetallesComponent implements OnInit {

  private owner: Owners;
  constructor(private servicioOwner: OwnerService, private ruta: Router, private parametro: ActivatedRoute, private servPet: PetService) {
    this.owner = <Owners>{};
  }

  borrar(ow: Owners) {
    if (confirm(`Deseas borrar a ${ow["firstName"]} ${ow["lastName"]}??`))
      this.servicioOwner.borrar(ow["id"]).subscribe(datos => {
        console.log(datos)
        this.ruta.navigate(["/owners"]);
      });

  }

  modificar(owner: Owners) {

    this.ruta.navigate(["form/" + owner.id]);

  }

  anhadirPet(owner: Owners) {
    this.ruta.navigate(["add-pet/" + owner.id]);
  }

  ngOnInit() {
    var idOwner
    idOwner = this.parametro.snapshot.params["id"];

    //para tener los pets como string
    // this.servicioOwner.getDetallesOwner(idOwner).subscribe(datos=>{
    //   this.owner = datos;
    // });
    
    //para tener los pets como array

    this.servPet.obtenerPets(idOwner).subscribe(datos => {
      console.log(datos);
      this.owner = datos;
      console.log(this.owner)
    })
  }

}
