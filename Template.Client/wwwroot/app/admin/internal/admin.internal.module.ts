import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { adminInternalRoutes } from './admin.internal.routes'

import { ProductComponent } from './products/products.component'


@NgModule({
    imports: [
        RouterModule.forChild(adminInternalRoutes)
    ],
    declarations: [
        ProductComponent
    ],
    providers: [

    ]
})
export class AdminInternalModule {
    
}