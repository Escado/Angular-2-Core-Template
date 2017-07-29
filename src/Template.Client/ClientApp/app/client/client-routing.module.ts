import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'internal', loadChildren: './internal/client.internal.module#ClientInternalModule' },
    { path: '', loadChildren: './public/client.public.module#ClientPublicModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ClientRoutingModule { }