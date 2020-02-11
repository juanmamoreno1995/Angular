import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public navBar = {
    isNavbarCollapsed: true,
    owners: {
      dropdown:true
    },
    vets:{
      dropdown: true
    }
  }

  abrirOw(){
    console.log("dentro de abrir ow");
    this.navBar.owners.dropdown = !this.navBar.owners.dropdown;
    this.navBar.vets.dropdown = true;
  }

  abrirVet(){
    this.navBar.vets.dropdown = !this.navBar.vets.dropdown;
    this.navBar.owners.dropdown = true;
  }

}
