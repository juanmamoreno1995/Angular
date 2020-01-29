import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPersonaComponent } from './form-persona/form-persona.component';
import { ListadoComponent } from './listado/listado.component';
const routes: Routes = [
  {
    path:"personas-add/:id",
    component: FormPersonaComponent
  },
  {
    path:"",
    component: ListadoComponent
  }

  // En un momento configuramos las rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }