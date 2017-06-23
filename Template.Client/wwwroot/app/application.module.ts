import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';

import { Error404Component } from './Public/Errors/404.component'

import { ApplicationComponent } from './application.component';
import { appRoutes } from './routes'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    declarations: [
        ApplicationComponent,
        Error404Component,
    ],
    bootstrap: [
        ApplicationComponent]
})
export class AppModule { }

