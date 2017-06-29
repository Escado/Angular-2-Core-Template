import { Routes } from '@angular/router'

import { clientInternalRoutes } from './internal/client.internal.routes'
import { clientPublicRoutes } from './public/client.public.routes'

export const clientRoutes: Routes = [
    { path: 'internal', loadChildren: './internal/client.internal.module#ClientInternalModule' },
    { path: 'public', loadChildren: './public/client.public.module#ClientPublicModule' },
]
