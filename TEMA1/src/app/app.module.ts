import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//router
import { RouterModule } from '@angular/router';

let modules = [
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule
]

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

let components = [
  AppComponent,
  LoginComponent
]

//routing
import { routing } from './app.routing';

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
