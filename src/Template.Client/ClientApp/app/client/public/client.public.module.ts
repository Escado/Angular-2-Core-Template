import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { clientPublicRoutes } from './client.public.routes'

import { ClientLoginComponent } from './login/login.component'

@NgModule({
    imports: [
        RouterModule.forChild(clientPublicRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ClientLoginComponent
    ],
    providers: [
    ],
    bootstrap: [
        
    ]

}) 
export class ClientPublicModule {

}