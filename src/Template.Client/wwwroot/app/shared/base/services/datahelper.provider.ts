import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ApiProvider {
    private _host: string;

    @Output() errorHandled$ = new EventEmitter();

    constructor(private _http: Http) {
        this._host = "http://localhost:5000";
    }

    private errorHandler(response: Response): any {
        if (response.status == 0) {
            this.errorHandled$.emit({
                value: "ERR_CONNECTION_REFUSED"
            });
        }
        return null;
    }

    get(path: string): Promise<any> {
        var headers = new Headers();

        return this._http.get(this._host + path, { headers: headers })
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch((response: Response) => this.errorHandler(response));
    }

    post(path: string, body: string): Promise<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this._host + path, body, { headers: headers })
            .toPromise()
            .then((response: Response) => {
                return response.json();
            })
            .catch((response: Response) => this.errorHandler(response));
    }
}