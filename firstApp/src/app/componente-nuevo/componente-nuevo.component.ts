import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-nuevo',
  templateUrl: './componente-nuevo.component.html',
  styleUrls: ['./componente-nuevo.component.css']
})
export class ComponenteNuevoComponent implements OnInit {
  public mostrar: boolean;

  private datos:{
    nombre: string,
    apellidos: string,
    estatura: number,
    fecha: Date
  }

  private opciones: Array<Object>;
  opSel: Object = null;

  constructor() { 
    this.mostrar = true;
    this.datos = {nombre:"Juanma", apellidos:"Moreno", estatura:0, fecha : new Date()}
    this.opciones=[
      {id:1, nombre:"Opción 1"},
      {id:2, nombre:"Opción 2"},
      {id:3, nombre:"Opción 3"},
      {id:4, nombre:"Opción 4"},
      {id:5, nombre:"Opción 5"}
    ];
  }

  ngOnInit() {
  }

  enviar(){
    alert("Aqui se envia")
  }
  limpiar(){
    this.datos = {nombre:"Juanma", apellidos:"Moreno", estatura:0, fecha : new Date()}
  }

  seleccion(args:any){
    console.log(args);

    console.log(this.opSel);
  }

}
