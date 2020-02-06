import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/servicios/owner.service';
import { ActivatedRoute } from '@angular/router';
import { Owners } from 'src/app/models/owners';

@Component({
  selector: 'app-owner-detalles',
  templateUrl: './owner-detalles.component.html',
  styleUrls: ['./owner-detalles.component.css']
})
export class OwnerDetallesComponent implements OnInit {
  
  private owner: Owners;
  constructor(private servicioOwner: OwnerService, private parametro:ActivatedRoute) { 
    this.owner = <Owners>{};
  }

  ngOnInit() {
   var idOwner
    idOwner = this.parametro.snapshot.params["id"];
    this.servicioOwner.getDetallesOwner(idOwner).subscribe(datos=>{
      this.owner = datos;
    })
  }

}
