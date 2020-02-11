import { Component, OnInit, COMPILER_OPTIONS } from '@angular/core';
import { OwnerService } from 'src/app/servicios/owner.service';
import { Owners } from 'src/app/models/owners';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {


  public prop: Owners;
  private idOwner: number;
  constructor(private servicioOw: OwnerService, private ruta: Router, private parametro: ActivatedRoute) {
    this.prop = <Owners>{};

  }

  anhadir(owner) {
    console.log(this.idOwner);
    owner.id = this.idOwner;
    if (this.idOwner == -1) {
      
      this.servicioOw.anhadirOModOwner(owner).subscribe(datos => {
        console.log(datos)
        if (datos.result == "OK")
          alert("Owner añadido con éxito")
        else alert("Fallo al añadir")

        this.ruta.navigate(["/owners"]);
      });
    } else {
      console.log(owner);
      this.servicioOw.anhadirOModOwner(owner).subscribe(datos => {
        console.log(datos);
        if (datos.result == "OK")
          alert("Owner modificado con éxito")
        else alert("Fallo al modificar")
        this.ruta.navigate(["/owners"]);
      });

    }

    console.log("primero", owner);
  }

  ngOnInit() {
    console.log(this.parametro.snapshot.params["id"]);
    this.idOwner = this.parametro.snapshot.params["id"];
    if (this.idOwner != -1)
      this.servicioOw.getDetallesOwner(this.idOwner).subscribe(datos => {
        this.prop = datos;
      });

    console.log(this.prop);
  }

}


