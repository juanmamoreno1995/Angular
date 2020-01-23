import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {
  private dni:string;
  private nombre:string;
  private apellidos:string;
  

  constructor() { }

  ngOnInit() {
  }

}
