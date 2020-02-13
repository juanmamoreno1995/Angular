import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/models/pet';
import { Owners } from 'src/app/models/owners';

@Component({
  selector: 'app-pet-detalles',
  templateUrl: './pet-detalles.component.html',
  styleUrls: ['./pet-detalles.component.css']
})
export class PetDetallesComponent implements OnInit {
  private arrPet:Pet[];
  constructor(private http: HttpClient, private ruta: Router, private parametro : ActivatedRoute) { }
  @Input() owner:Owners;
  ngOnInit() {

  }

}
