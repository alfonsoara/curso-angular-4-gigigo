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
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    ...components,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    BreadcrumbsComponent
  ],
  imports: [
    ...modules,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
