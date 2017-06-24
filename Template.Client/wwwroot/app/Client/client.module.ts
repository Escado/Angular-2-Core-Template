import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { appRoutes } from './client.routes'

import { ClientComponent } from './client.component'
import { LoginComponent } from './Login/login.component'

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
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