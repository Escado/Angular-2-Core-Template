import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { adminRoutes } from './admin.routes'

import { AdminInternalComponent } from './internal/admin.internal.component'
import { NavBarComponent } from './internal/navbar/navbar.component'

import { AdminpublicComponent } from './public/admin.public.component'


@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    declarations: [
        AdminpublicComponent,
        AdminInternalComponent,
        NavBarComponent
    ]
})

export class AdminModule {

}
