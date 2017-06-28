import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    templateUrl: 'login.component.html'
})
export class ClientLoginComponent {
    constructor(private router:Router) {
    }

    login(formValues) {
        console.log(formValues);
    }
}