import './rxjs-extensions'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';

import { ApplicationComponent } from './application.component';

import { ApplicationRoutingModule } from './application-routing.module';

import { ClientModule } from './client/client.module'

import { AdminModule } from './admin/admin.module'

@NgModule({
    imports: [
        BrowserModule,
        AdminModule,
        ClientModule,
        ApplicationRoutingModule

    ],
    declarations: [
        ApplicationComponent,

    ],
    bootstrap: [
        ApplicationComponent,
    ]
})
export class AppModule { }


