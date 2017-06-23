import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `<div>a</div>
<a [routerLink]="['/client/login']"> login</a>
<a [routerLink]="['/client']"> default</a>
<a [routerLink]="['/404']"> 404</a>
<router-outlet></router-outlet>`,
})
export class ApplicationComponent {

    constructor() {

    }
    name = 'Angular';
}



