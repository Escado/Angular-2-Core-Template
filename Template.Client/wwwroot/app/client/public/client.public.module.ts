import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { clientPublicRoutes } from './client.public.routes'

import { ClientPublicComponent } from './client.public.component'
import { LoginComponent } from './login/login.component'

@NgModule({
    imports: [
        RouterModule.forChild(clientPublicRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ClientPublicComponent,
        LoginComponent
    ],
    providers: [
    ],
    bootstrap: [
        
    ]

}) 
export class ClientPublicModule {

}