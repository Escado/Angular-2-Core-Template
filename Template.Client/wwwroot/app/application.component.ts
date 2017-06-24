import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app',
    template: `<router-outlet></router-outlet>`,
})
export class ApplicationComponent {
    link:boolean;
    constructor(private route: ActivatedRoute) {
        this.link = !route;
    }
}



