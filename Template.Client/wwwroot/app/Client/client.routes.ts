import { Routes } from '@angular/router'
import { LoginComponent } from './Login/login.component'
import { ClientComponent } from './client.component'

export const appRoutes: Routes = [
    { path: '', component: ClientComponent},
    { path: 'login', component: LoginComponent }
]