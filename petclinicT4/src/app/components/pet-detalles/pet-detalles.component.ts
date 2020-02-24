import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { Owners } from 'src/app/models/owners';
import { PetService } from 'src/app/servicios/pet.service';
import { OwnerService } from 'src/app/servicios/owner.service';
import { VisitService } from 'src/app/servicios/visit.service';
import { DatosService } from 'src/app/servicios/datos.service';


@Component({
  selector: 'app-pet-detalles',
  templateUrl: './pet-detalles.component.html',
  styleUrls: ['./pet-detalles.component.css']
})
export class PetDetallesComponent implements OnInit {
  private arrPet: Pet[];
  constructor(private http: HttpClient, private ruta: Router, private parametro: ActivatedRoute, private servPet: PetService,private serVi: VisitService, private datosV : DatosService) { }
  @Input() pet: Pet;
  @Input() owner: Owners;

  @Output() eliminado = new EventEmitter()

  ngOnInit() {
    console.log(this.owner)
  }

  borrarPet(pet: Pet) {
    console.log(pet);
    if (confirm(`¿Deseas borrar la mascota ${pet.name}?`)) {
      this.servPet.borrarPets(pet.id).subscribe(datos => {
        this.eliminado.emit(datos);
      });

    }
  }

  modPet(pet: Pet) {
    this.ruta.navigate(["add-pet/" + pet.id + "/" + this.owner.id]);
  }

  addVisit(pet : Pet){
    this.ruta.navigate(["add-visit/"+pet.id])
  }

  actualizarVisitas(datos){
    console.log(this.datosV.leerDatos());
    if (datos.result == "OK")
    
          alert("Visita borrada")
        else alert("Fallo al borrar")
    this.pet.visits= this.datosV.leerDatos()
       
  }

}
