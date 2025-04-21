import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent: () => import ('../app/home/home.component').then(m => m.HomeComponent)
},
{
    path: 'calender',
    loadComponent: () => import('../app/layout/footer/footer.component').then(m => m.FooterComponent)
}
];
