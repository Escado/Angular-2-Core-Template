import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AdminRoutingModule } from './admin-routing.module'

import { AdminInternalComponent } from './internal/admin.internal.component'
import { AdminInternalModule } from './internal/admin.internal.module'
import { NavBarComponent } from './internal/navbar/navbar.component'

import { AdminPublicModule } from './public/admin.public.module'


@NgModule({
    imports: [
        AdminRoutingModule,
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
