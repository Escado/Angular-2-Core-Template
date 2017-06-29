import { Routes } from '@angular/router'

import { ClientLoginComponent } from './login/login.component'

export const clientPublicRoutes: Routes = [
    { path: 'login', component: ClientLoginComponent },
]