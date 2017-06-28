import { Routes } from '@angular/router'
import { AdminLoginComponent } from './login/login.component'

export const adminPublicRoutes: Routes = [
    { path: 'public', component: AdminLoginComponent },
    // { path: '**', redirectTo: '' }
]