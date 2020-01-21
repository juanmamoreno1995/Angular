import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-g-hobbit',
  templateUrl: './g-hobbit.component.html',
  styleUrls: ['./g-hobbit.component.css']
})

export class GHobbitComponent implements OnInit {

	private lista: string[];
	private gHobbit: string;
	private accion: {id: number, nombre: string, indice:number};
	private hob: string;

  constructor() {
		this.lista = ["Bilbo Bolsón", "Sam Gamyi", "Frodo Bolsón", 
			"Pippin Paladin", "Merry Brandigamo", "Rosita Coto"];
		this.gHobbit = "";
		this.accion = {id:1, nombre:"Añadir", indice:-1};  //  1 -> Añadir;  2 -> Modificar
	 }

   anhadir(){
      console.log("dentro")
		if(this.gHobbit == ""){
			alert("Debes rellenar el campo")
		}else {
			console.log(this.gHobbit);
		if(this.accion.id == 1){
			this.lista.push(this.gHobbit);
			this.limpiar();

		} else {
			
			var ind= this.lista.indexOf(this.hob);
			console.log(this.gHobbit)
			console.log(this.accion.id);
			console.log(ind);
			this.lista.splice(ind, 1,this.gHobbit);
			this.accion.id=1;
			this.cancelar();
		}
	}
	 }

	 editar(nombre:string){
		this.gHobbit= nombre
		this.mostrar()
		console.log(this.gHobbit)
		
	 }

	 mostrar() {
		document.getElementById("mod").classList.add("ver");
		this.hob= this.gHobbit;
		
	}
	confirmar(){
		this.accion.id=2;
		console.log(this.hob);
		this.anhadir();
	}

	 cancelar() {
		document.getElementById("mod").classList.remove("ver");
		this.limpiar();
	}

	 borrar(nombre:string, i:number){
		if(confirm("Estás seguro que quieres borrar a "+nombre+" ?????"))
			this.lista.splice(i, 1);
			
	 }

	 limpiar(){
		 this.gHobbit="";
	 }

  ngOnInit() {
	}
	
	

}  //  class
