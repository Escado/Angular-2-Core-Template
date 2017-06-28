import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    templateUrl: 'login.component.html'
})
export class AdminLoginComponent {
    constructor(private router: Router) {

    }

    login(formValues) {
        this.router.navigate(['/admin/internal/'])
    }
}