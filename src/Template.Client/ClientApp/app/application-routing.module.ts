import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: '', loadChildren: './client/client.module#ClientModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class ApplicationRoutingModule { }