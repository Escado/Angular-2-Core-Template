import { Routes } from '@angular/router'
import { UserComponent } from '../../admin/internal/users/users.component'
import { UsersResolver } from '../../admin/internal/users/users-resolver'
import { ProductComponent } from '../../admin/internal/products/products.component'
import { ProductsResolver } from '../../admin/internal/products/products-resolver'

export const clientInternalRoutes: Routes = [
    { path: 'users2', component: UserComponent, resolve: { users: UsersResolver } },
    { path: 'products2', component: ProductComponent, resolve: { products: ProductsResolver } },
]