import { Routes } from '@angular/router';
import { DonateComponent } from '../components/donate/donate.component';
import { HomeComponent } from '../components/home/home.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'donate', component: DonateComponent },
  { path: 'donate', loadComponent: () => import('../components/donate/donate.component').then(m => m.DonateComponent) },
  { path: 'about', loadComponent: () => import('../components/about/about.component').then(m => m.AboutComponent) },
  { path: 'contactUs', loadComponent: () => import('../components/contact-us/contact-us.component').then(m => m.ContactUsComponent) },
];
