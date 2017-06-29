import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    templateUrl: 'login.component.html'
})
export class AdminLoginComponent {

    username: string;
    password: string;

    constructor(private router: Router) {

    }

    login(formValues) {
        this.router.navigate(['/admin/internal/default'])
    }
}