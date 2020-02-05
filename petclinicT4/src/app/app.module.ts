import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { OwnersComponent } from './components/owners/owners.component';
import { VetsComponent } from './components/vets/vets.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    OwnersComponent,
    VetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
