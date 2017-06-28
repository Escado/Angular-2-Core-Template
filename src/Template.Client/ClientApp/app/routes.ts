import { Routes } from '@angular/router'
import { clientRoutes } from './client/client.routes'
import { adminRoutes } from './admin/admin.routes'

export const appRoutes: Routes = [
    { path: 'client', children: clientRoutes },
    { path: 'admin', children: adminRoutes },
    // { path: '**', redirectTo: 'client' }
]

