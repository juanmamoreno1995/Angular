import { Component, OnInit } from '@angular/core';
import { PAjaxService } from '../p-ajax.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.css']
})
export class ListaDetalleComponent implements OnInit {
  private idFac: number;
  private numFac: string;
  private detalleFac: Object;
  private mostrarForm: boolean = false;
  private accion: Object;
  private cantidad: string;
  private concepto: string;
  private precio: string;
  private tIva: string;

  constructor(private servicioAjax: PAjaxService, private ruta: Router, private parametros: ActivatedRoute) {
    this.idFac = -1;
    this.numFac = "";
    this.accion = {
      id: -1,
      nombre: "Añadir"
    }

  }
  calcularTotalIva() {

  }

  abrirForm() {
    this.mostrarForm = true;
    console.log("dentro")
  }
  anhadirOMod() {
    var fact = {
      id_factura: this.idFac,
      cantidad: this.cantidad,
      concepto: this.concepto,
      precio: this.precio,
      tipo_iva: this.tIva
    }
    if (this.accion["id"] == -1) {
      this.servicioAjax.anhadir(fact).subscribe(datos => {
        console.log(datos);
        this.detalleFac = datos;
      })

    } else {
      fact["id"] = this.accion["id"];
      this.servicioAjax.modificar(fact).subscribe(datos => {
        this.detalleFac = datos;
      })
      this.accion["id"] = -1;
      this.accion["nombre"] = "Añadir";
    }
    this.cantidad = "";
    this.concepto = "";
    this.precio = "";
    this.tIva = "";
    this.mostrarForm = false;
  }

  cerrarForm(){
    this.mostrarForm=false;
  }
  modificar(f: object) {
    this.accion["nombre"] = "Modificar línea de detalle";
    this.cantidad = f["cantidad"];
    this.concepto = f["concepto"];
    this.precio = f["precio"];
    this.tIva = f["tipo_iva"];
    this.abrirForm();
    this.accion["id"] = f["id"];




  }

  borrar(f: object) {
    console.log(f);
    if (confirm(`Deseas borrar la factura con concepto ${f["concepto"]} ??`)) {
      this.servicioAjax.borrar(f["id"], this.idFac).subscribe(datos => {
        console.log(datos);
        this.detalleFac = datos;
      })
    }
  }

  ngOnInit() {
    this.idFac = this.parametros.snapshot.params["id"];
    this.numFac = this.parametros.snapshot.params["numero"];
    console.log(this.idFac, this.numFac);
    this.servicioAjax.listaDetalles(this.idFac).subscribe(datos => {
      console.log(datos);
      this.detalleFac = datos;
    })

  }

}
