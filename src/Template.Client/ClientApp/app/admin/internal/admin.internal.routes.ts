import { Routes } from '@angular/router'
import { AdminInternalComponent } from './admin.internal.component'
import { UsersResolver, UserComponent } from "./users/index";
import { ProductsResolver, ProductComponent } from "./products/index";
import { DashboardComponent, DashboardResolver } from "./dashboard/index";

export const adminInternalRoutes: Routes = [
    { path: 'user', component: UserComponent, resolve: { users: UsersResolver } },
    { path: 'product', component: ProductComponent, resolve: { products: ProductsResolver } },
    { path: 'dashboard', component: DashboardComponent, resolve: { data: DashboardResolver } },
    { path: '', redirectTo: 'dashboard' }
]