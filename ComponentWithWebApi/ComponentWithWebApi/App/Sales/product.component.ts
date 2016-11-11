import { Component, Input } from '@angular/core'; 

import { Product } from '../model/product';

@Component({
    moduleId: module.id,
    selector: 'product-comp',
    templateUrl: 'product.component.html'
})

export class ProductComponent {

    @Input() productData: Product[];

}