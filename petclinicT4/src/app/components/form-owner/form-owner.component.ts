import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/servicios/owner.service';
import { Owners } from 'src/app/models/owners';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.css']
})
export class FormOwnerComponent implements OnInit {


  private owner :Owners
  // private nombre : string;
  // private apellidos : string;
  // private direccion : string;
  // private ciudad : string;
  // private tel : string;

  constructor(private servicioOw : OwnerService,private ruta: Router) { 
    this.owner = <Owners>{
      firstName : "",
      lastName: "",
      address:"",
      city:"",
      telephone:""
    };
  }

  anhadir(){
   
    console.log(this.owner.firstName);
    console.log("dentro añadir")
  }

  ngOnInit() {
  }

}
