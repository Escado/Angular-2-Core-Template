import './rxjs-extensions'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { Error404Component } from './shared/errors/404.component'

import { httpFactory } from './shared/base/services/http.interceptor.factory'

import { ApplicationComponent } from './application.component';

import { ApplicationRoutingModule } from './application-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        ApplicationRoutingModule,
        HttpModule

    ],
    declarations: [
        ApplicationComponent,
        Error404Component
    ],
    bootstrap: [
        ApplicationComponent,
    ],
    providers: [
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions]
        }
    ]
})
export class AppModule { }


