import { Routes } from '@angular/router';
import { DonateComponent } from '../components/donate/donate.component';
import { HomeComponent } from '../components/home/home.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'donate', component: DonateComponent },
  // { path: 'about', loadComponent: () => import('../components/donate/donate.component').then(m => m.DonateComponent) },
];
