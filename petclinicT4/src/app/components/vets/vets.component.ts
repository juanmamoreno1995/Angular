import { Component, OnInit } from '@angular/core';
import { Vet } from 'src/app/models/vet';
import { VetService } from 'src/app/servicios/vet.service';

@Component({
  selector: 'app-vets',
  templateUrl: './vets.component.html',
  styleUrls: ['./vets.component.css']
})
export class VetsComponent implements OnInit {
  public arrVets: Array<Vet>;

  constructor(private serviceVet: VetService ) { }

  ngOnInit() {
    this.serviceVet.getVets().subscribe(datos=>{
      console.log(datos);
      this.arrVets = datos;
    })
  }

}
