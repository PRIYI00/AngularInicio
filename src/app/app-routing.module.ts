import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';

// Definir las Rutas de la App de Angular 
// El Path debe coincidir con [RouterLink] del componente Navbar.
const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'arrays', component: ArraysComponent},
  {path: 'pokemon', component: PokemonRestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
