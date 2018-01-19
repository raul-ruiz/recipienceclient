import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RecetaComponent } from './receta/receta.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormrecetaComponent} from './formreceta/formreceta.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'receta/crear', component: FormrecetaComponent },
  { path: 'receta/:id', component: RecetaComponent },
  { path: 'receta/editar/:id', component: FormrecetaComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
