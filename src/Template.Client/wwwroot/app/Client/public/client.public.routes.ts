import { Routes } from '@angular/router'

import { LoginComponent } from './login/login.component'

export const clientPublicRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: '**', redirectTo: '' }
]