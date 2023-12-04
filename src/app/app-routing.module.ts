import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { AcessComponent } from './acess/acess.component';
import { FaceDetectionComponent } from './recon/recon.component';


const routes: Routes = [
  {
path: '\start',
component : StartComponent,
  },
  {
  path : '\Login',
  component : LoginComponent,
  },
  {
      path : '\acess',
      component : AcessComponent,
  },
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'Login'
  },
  {
    path : "recon",
    component : FaceDetectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
