import { Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';

export const routes: Routes = [
// {
//     path: '',
//     loadComponent: () => import ('../app/home/home.component').then(m => m.HomeComponent)
// },
{
    path: 'setting',
    loadComponent: () => import ('../app/home/home.component').then(m => m.HomeComponent)
},
{
    path: 'calendar',
    loadComponent: () => import('../app/layout/footer/footer.component').then(m => m.FooterComponent)
},
  
{
    path: 'tasks',
    loadComponent: () => import('../app/layout/footer/footer.component').then(m => m.FooterComponent)
},
  
{
    path: 'about',
    loadComponent: () => import('../app/pages/about/about.component').then(m => m.AboutComponent)
  }
  
// {
//     path: 'home',
//     redirectTo: '',
//     pathMatch: 'full',
//     component: HomeComponent
// }

];
