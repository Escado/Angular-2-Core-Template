import { Routes } from '@angular/router'
import { Error404Component } from './Public/Errors/404.component'

export const appRoutes: Routes = [
    
    { path: '404', component: Error404Component },
    { path: 'client', loadChildren: './Client/client.module#ClientModule' },
    { path: 'admin', loadChildren: './Admin/admin.module#AdminModule' },
    { path: '**', redirectTo: 'client' }
] 

