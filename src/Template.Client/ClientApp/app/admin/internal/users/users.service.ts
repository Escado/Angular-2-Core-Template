import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IUser } from './users.model';
import { AppConfig } from '../../../shared/base/config/constants'

@Injectable()
export class UserService {

    constructor(private http: Http) {

    }

    Get(): Observable<IUser[]> {
        let subject = new Subject<IUser[]>();
        this.http.get(AppConfig.API_ENDPOINT + 'user/')
            .map(res => res.json())
            .subscribe(response => { subject.next(response); subject.complete(); });
        return subject;
    }
}