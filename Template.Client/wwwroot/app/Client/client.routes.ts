import { Routes } from '@angular/router'
import { ClientLoginComponent } from './Login/login.component'
import { ClientComponent } from './client.component'

export const appRoutes: Routes = [
    { path: '', component: ClientComponent},
    { path: 'login', component: ClientLoginComponent }
]