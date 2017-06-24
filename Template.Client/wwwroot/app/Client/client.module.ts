import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { clientRoutes } from './client.routes'

import { ClientComponent } from './client.component'
import { LoginComponent } from './public/login/login.component'

@NgModule({
    imports: [
        RouterModule.forChild(clientRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ClientComponent,
        LoginComponent
    ],
    providers: [
    ],
    bootstrap: [
        
    ]

}) 
export class ClientModule {

}