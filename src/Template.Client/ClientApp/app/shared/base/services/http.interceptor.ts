import { Injectable, ViewContainerRef } from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { AppConfig } from "../config/constants";
import { IAPIError } from '../../models/index';
import { ToastsManager } from 'ng2-toastr';


@Injectable()
export class InterceptedHttp extends Http {

    toastr: ToastsManager;

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, toastr: ToastsManager) {
        super(backend, defaultOptions);
        this.toastr = toastr;
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, this.getRequestOptionArgs(options, url))
            .catch(error => this.handleError(error));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): any {
        return super.post(url, body, this.getRequestOptionArgs(options, url))
            .catch(error => this.handleError(error));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, this.getRequestOptionArgs(options, url));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, this.getRequestOptionArgs(options, url));
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs, url?: string): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');

        if (url && url.startsWith(AppConfig.TOKEN_ENDPOINT)) {
            options.headers.append('Authorization', 'Bearer ' + localStorage.getItem('AUTH_TOKEN'));
        }

        return options;
    }

    private handleError(error: Response): Observable<Response> {
        var apiResponse: IAPIError = error.json();
        this.toastr.error(apiResponse.error, apiResponse.code.toString());
        return Observable.throw(error);
    }
}