import { Component } from '@angular/core'
import { IClaim } from '../../../shared/models/index'

@Component({
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html'
})
export class NavBarComponent {

    email: string;
    username: string;

    constructor() {
        var claims: IClaim[] = JSON.parse(localStorage.getItem("IDENTITY_CLAIMS"));
        if (claims && claims.length > 0)
        {
            this.email = claims.find(x => x.type === 'email').value;
            this.username = claims.find(x => x.type === 'unique_name').value;
        }
    }
}