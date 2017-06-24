import { Routes } from '@angular/router'
import { LoginComponent } from './public/login/login.component'
import { AdminComponent } from './admin.component'


export const adminRoutes: Routes = [
    { path: '', component: AdminComponent },
    { path: 'login', component: LoginComponent },

]