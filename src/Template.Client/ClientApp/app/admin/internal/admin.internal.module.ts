import { NgModule, } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { adminInternalRoutes } from './admin.internal.routes'

import { UserComponent, UserService, UsersResolver } from './users/index'

import { ProductComponent, ProductService, ProductsResolver } from "./products/index";

import { DashboardComponent, DashboardService, DashboardResolver } from "./dashboard/index";

@NgModule({
    imports: [
        RouterModule.forChild(adminInternalRoutes),
        CommonModule
    ],
    declarations: [
        UserComponent,
        ProductComponent,
        DashboardComponent
    ],
    providers: [
        UserService,
        ProductService,
        DashboardService,

        UsersResolver,
        ProductsResolver,
        DashboardResolver,
    ]
})
export class AdminInternalModule {

}