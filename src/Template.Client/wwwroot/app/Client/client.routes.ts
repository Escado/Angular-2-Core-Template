import { Routes } from '@angular/router'

export const clientRoutes: Routes = [
    { path: 'internal', loadChildren: 'app/client/internal/client.internal.module#ClientInternalModule' },
    { path: '', loadChildren: 'app/client/public/client.public.module#ClientPublicModule' },
]
