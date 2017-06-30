import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ClientRoutingModule } from './client-routing.module'

import { ClientPublicModule } from './public/client.public.module'
import { ClientInternalModule } from './internal/client.internal.module'

@NgModule({
    imports: [
        ClientPublicModule,
        ClientInternalModule,
        ClientRoutingModule
    ],
    declarations: [

    ]
}) 
export class ClientModule {

}