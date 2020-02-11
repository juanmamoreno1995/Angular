import { Component, OnInit } from '@angular/core';
import { Owners } from "../../models/owners";
import { OwnerService } from 'src/app/servicios/owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  public arrOwners: Array<Owners>;
  public accion = {id:"-1", nombre:"anhadir"}

  constructor(private serviceOwner: OwnerService, private ruta: Router ) { }


   
  ngOnInit() {
    this.serviceOwner.getOwners().subscribe(datos=>{
      console.log(datos);
      this.arrOwners = datos;
    })
  }


  modificar(){

  }

}
