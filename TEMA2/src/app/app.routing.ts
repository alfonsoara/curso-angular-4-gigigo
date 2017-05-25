import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    children: [
      {
        component: HomeComponent,
        path: 'home'
      }
    ],
    component: DashboardComponent,
    path: ''
  },
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
