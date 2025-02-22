import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ProductfetchService } from '../productfetch.service';
import {ProductCategory, Productproperty} from '../productproperty';

@Component({
  selector: 'app-productsgrid',
  imports: [CommonModule, ProductComponent],
  templateUrl: './productsgrid.component.html',
  styleUrl: './productsgrid.component.css'
})

export class ProductsgridComponent implements OnInit {
  @Input() category!: ProductCategory;
  products: Productproperty[] = [];

  constructor(private productfetchService: ProductfetchService) { }

  ngOnInit() {
    this.products = this.productfetchService.getProductsByCategory(this.category);
  }
}
