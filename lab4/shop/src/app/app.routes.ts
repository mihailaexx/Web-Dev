import { Routes } from '@angular/router';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductcategoryComponent } from './productcategory/productcategory.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductcategoryComponent,
    title: 'Home page',
  },
  {
    path: 'product/:id',
    component: ProductdetailComponent,
    title: '',
  }
];

