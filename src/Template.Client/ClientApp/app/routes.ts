import { Routes } from '@angular/router'
import { clientRoutes } from './client/client.routes'
import { adminRoutes } from './admin/admin.routes'

export const appRoutes: Routes = [
    { path: 'client', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'admin', loadChildren: './client/client.module#ClientModule' },
]

