import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productproperties } from '../productproperties';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Productproperties;
}
