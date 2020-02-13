import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { OwnersComponent } from './components/owners/owners.component';
import { VetsComponent } from './components/vets/vets.component';
import { OwnerDetallesComponent } from './components/owner-detalles/owner-detalles.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { VetDetallesComponent } from './components/vet-detalles/vet-detalles.component';
import { FormVetsComponent } from './components/form-vets/form-vets.component';
import { PetAddComponent } from './components/pet-add/pet-add.component';
import { PetDetallesComponent } from './components/pet-detalles/pet-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    OwnersComponent,
    VetsComponent,
    OwnerDetallesComponent,
    FormOwnerComponent,
    VetDetallesComponent,
    FormVetsComponent,
    PetAddComponent,
    PetDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
