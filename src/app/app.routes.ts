import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: HomeComponent,
    },
    {
        path: '**',
        title: '404 Not Found',
        component: NotFoundComponent
    },
];
