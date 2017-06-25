import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { clientRoutes } from './client.routes'

@NgModule({
    imports: [
        RouterModule.forChild(clientRoutes),
    ]
}) 
export class ClientModule {

}