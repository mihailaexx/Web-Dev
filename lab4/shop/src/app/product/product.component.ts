import { Component, Input, inject } from '@angular/core';
import { Productproperty } from '../productproperty';
import { RouterLink } from '@angular/router';
import { ProductshareService } from '../productshare.service';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Productproperty;
  sharingService: ProductshareService = inject(ProductshareService);
  constructor() { }

}
