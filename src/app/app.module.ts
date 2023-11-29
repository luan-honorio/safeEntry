import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StartComponent } from './start/start.component';
import { FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AcessComponent } from './acess/acess.component';
import { ReconComponent } from './recon/recon.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StartComponent,
    AcessComponent,
    ReconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLinkActive,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
