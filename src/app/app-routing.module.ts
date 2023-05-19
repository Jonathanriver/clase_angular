import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: SaludoComponent},
  {path: 'saludo', component: SaludoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }