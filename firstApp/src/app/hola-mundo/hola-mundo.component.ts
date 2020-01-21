import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {
  titulico="soy un string";
  cosicas= new Array ("agua", "tierrra","aire","fuego");

  constructor() { }

  ngOnInit() {
  }

}
