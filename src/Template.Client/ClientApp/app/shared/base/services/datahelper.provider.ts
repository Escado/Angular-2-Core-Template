import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { IAPIError } from "../../models/index";
import { ToastsManager } from "ng2-toastr/ng2-toastr";

@Injectable()
export class DataHelper {

    constructor(private _http: Http, private toastr: ToastsManager) {
    }

    post(url: string, body: string, options?: RequestOptionsArgs, showMessage?: boolean, messageTitle?: string, messageText?: string): any {
        return this._http.post(url, body, options)
            .map(result => {
                if (showMessage) {
                    this.toastr.success(messageText, messageTitle);
                }                
                return result.json()
            })
    }

    get(url: string, options?: RequestOptionsArgs, showMessage?: boolean, messageTitle?: string, messageText?: string): any {
        return this._http.get(url, options)
            .map(result => {
                if (showMessage) {
                    this.toastr.success(messageText, messageTitle);
                }
                return result.json()
            })
    }

    put(url: string, body: string, options?: RequestOptionsArgs, showMessage?: boolean, messageTitle?: string, messageText?: string): any {
        return this._http.put(url, body, options)
            .map(result => {
                if (showMessage) {
                    this.toastr.success(messageText, messageTitle);
                }
                return result.json()
            })
    }

    delete(url: string, options?: RequestOptionsArgs, showMessage?: boolean, messageTitle?: string, messageText?: string): any {
        return this._http.delete(url, options)
            .map(result => {
                if (showMessage) {
                    this.toastr.success(messageText, messageTitle);
                }
                return result.json()
            })
    }

}