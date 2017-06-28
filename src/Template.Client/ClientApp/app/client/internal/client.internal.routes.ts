import { Routes } from '@angular/router'
import { UserComponent } from '../../admin/internal/users/users.component'
import { UsersResolver } from '../../admin/internal/users/users-resolver'
import { ProductComponent } from '../../admin/internal/products/products.component'
import { ProductsResolver } from '../../admin/internal/products/products-resolver'

export const clientInternalRoutes: Routes = [
    { path: 'users', component: UserComponent, resolve: { users: UsersResolver } },
    { path: 'products', component: ProductComponent, resolve: { products: ProductsResolver } },
    // { path: '**', redirectTo: 'users' },
]