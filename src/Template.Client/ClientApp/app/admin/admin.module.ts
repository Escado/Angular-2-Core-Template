import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AdminRoutingModule } from './admin-routing.module'

import { AdminInternalComponent } from './internal/admin.internal.component'
import { AdminInternalModule } from './internal/admin.internal.module'
import { NavBarComponent } from './internal/navbar/navbar.component'

import { AdminPublicModule } from './public/admin.public.module'
import { PermissionsDirective } from "../shared/directives/index";


@NgModule({
    imports: [
        AdminRoutingModule,
        AdminPublicModule,
        AdminInternalModule,
        PermissionsDirective
    ],
    declarations: [
        NavBarComponent,
        AdminInternalComponent,
    ]
})

export class AdminModule {

}
