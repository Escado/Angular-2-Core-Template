import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './products.model'

@Injectable()
export class ProductService {
    
    Get(): Observable<IProduct[]> {
        let subject = new Subject<IProduct[]>();
        setTimeout(() => { subject.next(products); subject.complete(); }, 1000);
        return subject;
    }
}

const products: IProduct[] = [
    {
        id: 1,
        name: "Ben",
        price: 1.23
    }, {
        id: 2,
        name: "Me",
        price: 1.1
    },


]