import { NgModule,  } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { adminInternalRoutes } from './admin.internal.routes'

import { UserComponent } from './users/users.component'
import { UserService } from './users/users.provider'
import { UsersResolver } from './users/users-resolver'


@NgModule({
    imports: [
        RouterModule.forChild(adminInternalRoutes),
        CommonModule
    ],
    declarations: [
        UserComponent
    ],
    providers: [
        UserService,
        UsersResolver
    ]
})
export class AdminInternalModule {

}