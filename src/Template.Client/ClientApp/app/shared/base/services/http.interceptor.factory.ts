import { XHRBackend, Http, RequestOptions } from "@angular/http";
import { ViewContainerRef } from "@angular/core";
import { InterceptedHttp } from "./http.interceptor";
import { ToastsManager } from "ng2-toastr"

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, toastr: ToastsManager): Http {
    return new InterceptedHttp(xhrBackend, requestOptions, toastr);
}