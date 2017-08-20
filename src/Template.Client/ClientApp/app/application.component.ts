import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr'

@Component({
    selector: 'app',
    template: `<router-outlet></router-outlet>`,
})
export class ApplicationComponent {
    constructor(private toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
    }
}



