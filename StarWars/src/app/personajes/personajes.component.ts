import { Component, OnInit } from '@angular/core';
import{PAjaxService} from "../p-ajax.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public datos:any = null;
  public listPer: Object[];
  public datosPlaneta: Object = null;
  private urlAnt: string;
  private urlSig: string;
  private urlPlanet: any;
  private mundo: Object;

  private asignarDatos(datos:Object){
    this.datos = datos;
    console.log(this.datos);
    console.log(this.datos.next);
    this.listPer = this.datos.results; 
    this.urlSig = this.datos.next;
    this.urlAnt = this.datos.previous;
    this.urlPlanet = this.datos.results;
  }

  constructor(private serviciopAjax: PAjaxService) {
    this.serviciopAjax.peti().subscribe(daticos =>{
      console.log(daticos);
      this.asignarDatos(daticos);

    })
   }

   sig(){
    console.log(this.urlSig);
    this.serviciopAjax.petiSigAnt(this.urlSig).subscribe(datos =>{
      console.log(datos);
      this.asignarDatos(datos);

    })
  }

  ant(){
   console.log(this.urlAnt);
   this.serviciopAjax.petiSigAnt(this.urlAnt).subscribe(datos =>{
     console.log(datos);
     this.asignarDatos(datos);

   })
 }
 
 pintarPlanetas(indice:any){

  console.log(indice);
  console.log(this.urlPlanet[indice].homeworld);

  this.serviciopAjax.petiSigAnt(this.urlPlanet[indice].homeworld).subscribe(datos =>{
    console.log(datos);
    if(datos!=null){
      this.mundo=datos;
      console.log(this.mundo);
    }
  
  })
 }

  ngOnInit() {
  }

}
