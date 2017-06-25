import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    templateUrl: 'app/admin/public/login/login.component.html'
})
export class LoginComponent {
    constructor(private router: Router) {

    }

    login(formValues) {
        this.router.navigate(['/admin/internal/'])
    }
}