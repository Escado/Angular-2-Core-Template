import { Routes } from '@angular/router'
import { AdminLoginComponent } from './Login/login.component'
import { AdminComponent } from './admin.component'


export const adminRoutes: Routes = [
    { path: '', component: AdminComponent },
    { path: 'login', component: AdminLoginComponent },

]