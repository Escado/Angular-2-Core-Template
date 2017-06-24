import { Routes } from '@angular/router'
import { LoginComponent } from './public/login/login.component'
import { ClientComponent } from './client.component'

export const clientRoutes: Routes = [
    { path: '', loadChildren: 'app/client/public/client.public.module#ClientPublicModule' },
]
