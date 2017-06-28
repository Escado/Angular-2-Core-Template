import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { clientRoutes } from './client.routes'

import { ClientPublicModule } from './public/client.public.module'
import { ClientInternalModule } from './internal/client.internal.module'

@NgModule({
    imports: [
        ClientPublicModule,
        ClientInternalModule,
        RouterModule.forChild(clientRoutes),
    ],
    declarations: [

    ]
}) 
export class ClientModule {

}