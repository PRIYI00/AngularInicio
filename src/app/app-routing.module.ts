import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';

// Definir las Rutas de la App de Angular 
// El Path debe coincidir con [RouterLink] del componente Navbar.
const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'arrays', component: ArraysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
