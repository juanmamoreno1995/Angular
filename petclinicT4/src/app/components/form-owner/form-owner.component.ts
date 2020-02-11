import { Component, OnInit, COMPILER_OPTIONS } from '@angular/core';
import { OwnerService } from 'src/app/servicios/owner.service';
import { Owners } from 'src/app/models/owners';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {


  public prop: Owners;

  constructor(private servicioOw: OwnerService, private ruta: Router) {
    this.prop = <Owners>{};

  }

  anhadir(owner) {
    this.servicioOw.anhadirOModOwner(owner).subscribe(datos => {
      console.log(datos)
      if (datos.result == "OK")
        alert("Owner añadido con éxito")
      else alert("Fallo al añadir")
    });
    this.ruta.navigate(["/owners"]);
    console.log("primero", owner);
    console.log(this.prop);
    console.log("dentro añadir");
  }

  ngOnInit() {
  }

}
