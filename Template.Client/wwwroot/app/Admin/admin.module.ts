import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component'
import { LoginComponent } from './public/login/login.component'
import { adminRoutes } from './admin.routes'

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes),
        FormsModule,
        ReactiveFormsModule
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
