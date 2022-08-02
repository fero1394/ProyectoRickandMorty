import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { ListaComponent } from './componentes/lista/lista.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'principal',
    pathMatch:'full'
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'lista',
    component: ListaComponent
  },
  {
    path: 'notFound',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
