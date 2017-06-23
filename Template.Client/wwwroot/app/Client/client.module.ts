import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { appRoutes } from './client.routes'

import { ClientComponent } from './client.component'
import { ClientLoginComponent } from './Login/login.component'

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    declarations: [
        ClientComponent,
        ClientLoginComponent
    ],
    providers: [
    ],
    bootstrap: [
        
    ]

}) 
export class ClientModule {

}