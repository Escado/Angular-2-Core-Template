import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router'
import { DashboardService } from './dashboard.service';

@Injectable()
export class DashboardResolver implements Resolve<any> {

    constructor(private _dashboardService: DashboardService) {

    }
    resolve() {
        return this._dashboardService.Get().map(data => data)
    }

}