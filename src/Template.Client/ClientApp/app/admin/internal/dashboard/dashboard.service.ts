import { Injectable } from '@angular/core'

import { DataHelper } from "../../../shared/base/services/datahelper.provider";
import { IDashboard } from "./dashboard.model";

import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DashboardService {

    constructor(private _http: DataHelper) {

    }

    Get(): Observable<IDashboard> {
        let subject = new Subject<IDashboard>();
        setTimeout(() => {
            subject.next(data);
            subject.complete();
        }, 1);
        return subject;
    }
}

const data: IDashboard = {
    productCount: 61,
    usersCount: 11
}