import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: HomeComponent,
    },
    {
        path: 'about',
        title: 'About Page',
        component: AboutComponent,
    },
    {
        path: 'projects',
        title: 'Projects Page',
        component: ProjectsComponent,
    },
    {
        path: '**',
        title: '404 Not Found',
        component: NotFoundComponent
    },
];
