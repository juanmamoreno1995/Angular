import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  constructor(private ruta:Router, private cogeParametro: ActivatedRoute ) { }

  ngOnInit() {
    const p1 = this.cogeParametro.snapshot.params["p1"];
    const p2 = this.cogeParametro.snapshot.params["p2"];
    console.log(`p1 = ${p1}`)

  }

}
