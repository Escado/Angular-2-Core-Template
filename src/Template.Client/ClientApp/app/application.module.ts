import './rxjs-extensions'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { Error404Component } from './shared/errors/404.component'

import { ToastModule, ToastOptions, ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CustomToastOptions } from './shared/base/config/toastr-options';

import { httpFactory } from './shared/base/services/http.interceptor.factory'

import { ApplicationComponent } from './application.component';

import { ApplicationRoutingModule } from './application-routing.module';
import { DataHelper } from "./shared/base/services/datahelper.provider";
import { PermissionsDirective } from "./shared/directives/index";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ApplicationRoutingModule,
        HttpModule,
        ToastModule.forRoot(),
    ],
    declarations: [
        ApplicationComponent,
        Error404Component,
        PermissionsDirective
    ],
    bootstrap: [
        ApplicationComponent,
    ],
    providers: [
        DataHelper,
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions, ToastsManager]
        },
        {
            provide: ToastOptions,
            useClass: CustomToastOptions
        }
    ]
})
export class AppModule { }


