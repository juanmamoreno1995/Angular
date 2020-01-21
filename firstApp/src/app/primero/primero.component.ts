import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit {
  atributo1 = "Hola Fran"
  constructor() { }

  ngOnInit() {
  }

}
