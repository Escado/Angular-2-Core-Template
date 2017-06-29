import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    templateUrl: 'login.component.html'
})
export class ClientLoginComponent {

    username: string;
    password: string;

    constructor(private router: Router) {
    }

    login(formValues) {
        console.log(formValues);
    }
}