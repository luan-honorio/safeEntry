import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {
path: '\start',
component : StartComponent,
  },
  {
  path : 'Login',
  component : LoginComponent,
  },
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'Login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
