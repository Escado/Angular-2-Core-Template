import { Component, ViewContainerRef } from '@angular/core'
import { Router } from '@angular/router'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AppConfig } from '../../../shared/base/config/constants'
import { DataHelper } from "../../../shared/base/services/datahelper.provider";
import { IClaim } from "../../../shared/models/index";

@Component({
    templateUrl: 'login.component.html'
})
export class AdminLoginComponent {

    username: string;
    password: string;
    

    constructor(private router: Router, private http: DataHelper, public toastr: ToastsManager) {
    }

    login(formValues) {
        this.http
            .post(AppConfig.TOKEN_ENDPOINT, formValues)
            .subscribe((response: any) => {
                var claims: IClaim[] = response.claims;
                localStorage.setItem('AUTH_TOKEN', response.token);
                localStorage.setItem('AUTH_TOKEN_EXPIRES', response.expires);
                localStorage.setItem('IDENTITY_CLAIMS', JSON.stringify(response.claims));
                this.toastr.success(claims.find(x => x.type == 'unique_name').value, "Welcome!")
                this.router.navigate(['/admin/internal/']);
            });
        
    }
}