import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components

import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  // otherwise redirect to home
  {
    path: '**',
    redirectTo: ''
  }
]


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
