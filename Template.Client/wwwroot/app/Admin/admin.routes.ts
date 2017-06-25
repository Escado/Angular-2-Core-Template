import { Routes } from '@angular/router'
import { AdminInternalComponent } from './internal/admin.internal.component'
import { AdminpublicComponent } from './public/admin.public.component'

export const adminRoutes: Routes = [
    { path: 'internal', component: AdminInternalComponent, loadChildren: 'app/admin/internal/admin.internal.module#AdminInternalModule' },
    { path: '', component: AdminpublicComponent ,loadChildren: 'app/admin/public/admin.public.module#AdminPublicModule' }
    

]