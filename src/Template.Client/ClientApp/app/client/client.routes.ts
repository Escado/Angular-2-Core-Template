import { Routes } from '@angular/router'

import { clientInternalRoutes } from './internal/client.internal.routes'
import { clientPublicRoutes } from './public/client.public.routes'

export const clientRoutes: Routes = [
    { path: 'internal', children: clientInternalRoutes },
    { path: 'public', children: clientPublicRoutes },
]
