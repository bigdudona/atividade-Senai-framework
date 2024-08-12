import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RestritoComponent } from './restrito/restrito.component';
import { GuardGuard } from './guard.guard';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'', component: LoginComponent},
  {path:'restrito',component: RestritoComponent, canActivate: [GuardGuard]},
  {path:'Lista', component: ListaComponent},
  {path:'', redirectTo:'/inicio',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
