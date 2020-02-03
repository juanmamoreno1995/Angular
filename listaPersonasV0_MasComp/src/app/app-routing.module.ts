import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { FormPersonaComponent } from './form-persona/form-persona.component';
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [
 {
   path:"",
   component:ListadoComponent
 },
 {
   path:"anhadir",
   component:FormPersonaComponent
 },
 {
   path:"modificar/:id",
   component:ModificarComponent
 }

  // En un momento configuramos las rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }