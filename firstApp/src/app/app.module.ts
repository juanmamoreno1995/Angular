import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PrimeroComponent } from './primero/primero.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { CosasComponent } from './cosas/cosas.component';
import { ComponenteNuevoComponent } from './componente-nuevo/componente-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    HolaMundoComponent,
    CosasComponent,
    ComponenteNuevoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
