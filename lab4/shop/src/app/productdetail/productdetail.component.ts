import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductfetchService } from '../productfetch.service';

@Component({
  selector: 'app-productdetail',
  imports: [],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.css'
})
export class ProductdetailComponent {
  product: any;
  constructor() {
    const productID = Number(inject(ActivatedRoute).snapshot.params['id']); // get product id from URL
    this.product = inject(ProductfetchService).getProductById(productID);
  }
}
