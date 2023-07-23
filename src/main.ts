import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  { path: 'home', loadComponent: () => import('./app/components/home/home.component').then((c) => c.HomeComponent) },
  { path: 'contact', loadComponent: () => import('./app/components/contact/contact.component').then((c) => c.ContactComponent) },
  { path: 'about', loadComponent: () => import('./app/components/about/about.component').then((c) => c.AboutComponent) },
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: '**', redirectTo: '/home'},
];

bootstrapApplication(AppComponent, { providers: [importProvidersFrom(RouterModule.forRoot(routes))]}).catch((error) => console.error(error));
