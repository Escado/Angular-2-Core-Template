import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { adminRoutes } from './admin.routes'

import { AdminInternalComponent } from './internal/admin.internal.component'
import { AdminInternalModule } from './internal/admin.internal.module'
import { NavBarComponent } from './internal/navbar/navbar.component'

import { AdminPublicModule } from './public/admin.public.module'


@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes),
        AdminPublicModule,
        AdminInternalModule
    ],
    declarations: [
        NavBarComponent,
        AdminInternalComponent
    ]
})

export class AdminModule {

}
