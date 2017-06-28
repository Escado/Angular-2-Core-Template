import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './products.model'
import { ProductService} from './products.service'

@Component({
    templateUrl: 'products.component.html'
})
export class ProductComponent implements OnInit {
    private products: IProduct[];

    constructor(private route: ActivatedRoute, private _productService:ProductService) {

    }

    setProducts() {
        this._productService.Get().map(x => x).subscribe(x => this.products = x);
    }

    ngOnInit(): void {
        this.setProducts();
    }
}