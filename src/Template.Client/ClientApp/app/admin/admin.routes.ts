import { Routes } from '@angular/router'
import { AdminInternalComponent } from './internal/admin.internal.component'
import { adminInternalRoutes } from './internal/admin.internal.routes'
import { adminPublicRoutes } from './public/admin.public.routes'

export const adminRoutes: Routes = [
    { path: 'internal', component: AdminInternalComponent, loadChildren: './internal/admin.internal.module#AdminInternalModule' },
    { path: 'public', loadChildren: './public/admin.public.module#AdminPublicModule' },
]