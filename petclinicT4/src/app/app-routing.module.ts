import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnersComponent } from './components/owners/owners.component';
import { VetsComponent } from './components/vets/vets.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { OwnerDetallesComponent } from './components/owner-detalles/owner-detalles.component';
import { FormOwnerComponent } from './components/form-owner/form-owner.component';
import { VetDetallesComponent } from './components/vet-detalles/vet-detalles.component';
import { FormVetsComponent } from './components/form-vets/form-vets.component';
import { PetAddComponent } from './components/pet-add/pet-add.component';
import { FormVisitComponent } from './components/form-visit/form-visit.component';


const routes: Routes = [
  {
    path: "",
    component: InicioComponent
  },
  {
    path: "owners",
    component: OwnersComponent
  },
  {
    path: "detalles-owner/:id",
    component: OwnerDetallesComponent
  },
  {
    path: "vets",
    component: VetsComponent
  },
  
  {
    path: "form/:id",
    component: FormOwnerComponent
  },
  {
    path:"detalles-vets/:id",
    component: VetDetallesComponent
  },
  {
    path:"form-vet/:id",
    component:FormVetsComponent
  },

  {
    path:"add-pet/:idPet/:idOw",
    component:PetAddComponent
  },
  {
    path:"add-visit/:idPet",
    component:FormVisitComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
