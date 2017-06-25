import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { adminPublicRoutes } from './admin.public.routes'

import { LoginComponent } from './login/login.component'

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(adminPublicRoutes)
    ],
    declarations: [
        LoginComponent
    ],
    providers: [

    ]
})
export class AdminPublicModule {

}