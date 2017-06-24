import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Error404Component } from './Shared/Errors/404.component'
import { NavBarComponent } from './Public/NavBar/navbar.component'

import { ApplicationComponent } from './application.component';
import { appRoutes } from './routes'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ApplicationComponent,
        Error404Component,
        NavBarComponent
    ],
    bootstrap: [
        ApplicationComponent]
})
export class AppModule { }

