import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { Pettype } from "../../models/pettype";
import { PetTypesService } from "../../servicios/pet-types.service";

@Component({
  selector: 'app-pettype-add',
  templateUrl: './pettype-add.component.html',
  styleUrls: ['./pettype-add.component.css']
})
export class PettypeAddComponent implements OnInit {
	pettype: Pettype;
  @Output() onNew = new EventEmitter<Pettype>();
  constructor(private servicioPetType: PetTypesService, private route: ActivatedRoute, private ruta: Router) {
		this.pettype = <Pettype>{};
	 }

  ngOnInit() {
	}

	onSubmit(pettype: Pettype){
	//	console.log(pettype);
		pettype.id = null;
    this.servicioPetType.addType(pettype).subscribe(
      new_pettype => {
				console.log(new_pettype);
				
        this.pettype = new_pettype;
        this.onNew.emit(this.pettype);
      },
      error => console.log(error)
		);
  }

}
