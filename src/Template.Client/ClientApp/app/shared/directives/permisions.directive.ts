import { Directive, Input, ElementRef, OnInit } from '@angular/core'
import { IClaim } from "../models/index";

@Directive({
    selector: '[requireClaim]'
})
export class PermissionsDirective {

    private el: HTMLElement;

    @Input() requireClaim: string;

    constructor(private ref: ElementRef) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        console.log('init');
        if (localStorage && localStorage.getItem("IDENTITY_CLAIMS") !== null) {
            let claims: IClaim[] = JSON.parse(localStorage.getItem("IDENTITY_CLAIMS"));
            let requredClaim = claims.find(x => x.type === this.requireClaim);
            if (requredClaim && requredClaim.value !== "false") {
                this.el.style.visibility = 'block';
            }                
            else {
                this.el.style.display = 'none';
            }

        }
    }
}