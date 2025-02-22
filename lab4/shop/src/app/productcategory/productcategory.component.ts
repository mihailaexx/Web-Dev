import { Component } from '@angular/core';
import { ProductCategory } from '../productproperty';
import { CommonModule } from '@angular/common';
import { ProductsgridComponent } from '../productsgrid/productsgrid.component';

@Component({
  selector: 'app-productcategory',
  imports: [CommonModule, ProductsgridComponent],
  templateUrl: './productcategory.component.html',
  styleUrl: './productcategory.component.css'
})

export class ProductcategoryComponent {
  categories: ProductCategory[] = [];
  constructor() {
    this.categories = Object.values(ProductCategory);
  }
  openCategories: { [key: string]: boolean } = {};
  toggleProductsList(category: string) {
    this.openCategories[category] = !this.openCategories[category];
  }
}
