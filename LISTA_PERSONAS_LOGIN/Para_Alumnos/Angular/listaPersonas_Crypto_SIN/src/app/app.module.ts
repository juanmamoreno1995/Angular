import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PersonasListadoComponent } from './componentes/personas-listado/personas-listado.component';
import { PersonasAnadeComponent } from './componentes/personas-anade/personas-anade.component';
import { LoginComponent } from './componentes/login/login.component';

import { HttpClientModule } from "@angular/common/http";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { RegistroComponent } from './componentes/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PersonasListadoComponent,
    PersonasAnadeComponent,
    LoginComponent,
    MenuPrincipalComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
