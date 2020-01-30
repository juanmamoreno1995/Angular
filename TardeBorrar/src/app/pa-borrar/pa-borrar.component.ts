import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pa-borrar',
  templateUrl: './pa-borrar.component.html',
  styleUrls: ['./pa-borrar.component.less']
})
export class PaBorrarComponent implements OnInit {
  @Input() entrada: string; //para pasar un atributo de un componente a otro
  constructor() { }

  ngOnInit() {
  }

}
