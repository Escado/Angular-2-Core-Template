import { Routes } from '@angular/router'
import { AdminInternalComponent } from './admin.internal.component'
import { UserComponent } from './users/users.component'
import { UsersResolver } from './users/users-resolver'
import { ProductComponent } from './products/products.component'
import { ProductsResolver } from './products/products-resolver'

export const adminInternalRoutes: Routes = [
    { path: 'users', component: UserComponent, resolve: { users: UsersResolver } },
    { path: 'products', component: ProductComponent, resolve: { products: ProductsResolver } },
]