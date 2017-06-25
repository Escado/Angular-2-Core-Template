import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    templateUrl: 'app/client/public/Login/login.component.html'
})
export class LoginComponent {
    constructor(private router:Router) {

    }

    login(formValues) {
        console.log(formValues);
    }
}