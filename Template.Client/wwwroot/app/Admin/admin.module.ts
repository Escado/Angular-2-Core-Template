import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AdminComponent } from './admin.component'
import { LoginComponent } from './Login/login.component'
import { adminRoutes } from './admin.routes'

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes),    
    ],
    declarations: [
        AdminComponent,
        LoginComponent
    ],
    providers: [
    ]
})

export class AdminModule {

}
