import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductsgridComponent } from './productsgrid/productsgrid.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsgridComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: ProductComponent,
    title: ':name',
  }
];

