import { Component, OnInit } from '@angular/core'
import { DashboardService, IDashboard } from "./index";

@Component({
    templateUrl: 'dashboard.component.html',    
})
export class DashboardComponent implements OnInit{

    dashboardData: IDashboard;

    constructor(private _dashboardService: DashboardService) {

    }

    setProducts() {
        this._dashboardService.Get().map(x => x).subscribe(x => this.dashboardData = x);
    }

    ngOnInit(): void {
        this.setProducts();
    }
}