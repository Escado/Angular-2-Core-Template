import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminInternalComponent } from './internal/admin.internal.component';

export const routes: Routes = [
    { path: 'internal', component: AdminInternalComponent, loadChildren: './internal/admin.internal.module#AdminInternalModule' },
    { path: 'public', loadChildren: './public/admin.public.module#AdminPublicModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }