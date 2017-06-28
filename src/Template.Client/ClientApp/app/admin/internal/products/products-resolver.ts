import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router'
import { ProductService } from './products.service';

@Injectable()
export class ProductsResolver implements Resolve<any> {

    constructor(private _productService:ProductService) {
        
    }
    resolve() {
        return this._productService.Get().map(products => products)
    }

}