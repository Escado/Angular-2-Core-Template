import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AdminComponent } from './admin.component'
import { AdminLoginComponent } from './Login/login.component'
import { adminRoutes } from './admin.routes'

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes),    
    ],
    declarations: [
        AdminComponent,
        AdminLoginComponent
    ],
    providers: [
    ]
})

export class AdminModule {

}
