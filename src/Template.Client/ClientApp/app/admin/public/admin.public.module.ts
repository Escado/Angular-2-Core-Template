import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { adminPublicRoutes } from './admin.public.routes'

import { AdminLoginComponent } from './login/login.component'

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(adminPublicRoutes)
    ],
    declarations: [
        AdminLoginComponent
    ],
    providers: [

    ]
})
export class AdminPublicModule {

}