import {RouterModule, Route} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ABOUT_ROUTE} from './about/about.routing';
import {RESUME_ROUTE} from './resume/resume.routing';

const routes: Route[] = [
    {path: '', pathMatch: 'full', redirectTo: 'about'},
    ABOUT_ROUTE,
    RESUME_ROUTE
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
    routes,
    {
        useHash: true
    }
);
