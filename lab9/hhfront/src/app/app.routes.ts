import { Routes } from '@angular/router';
import {CompanyComponent} from './company/company.component';
import {VacancyComponent} from './vacancy/vacancy.component';

export const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    title: 'Companies',
  },
  {
    path: 'company/:id/vacancies',
    component: VacancyComponent,
    title: 'Vacancy',
  }
];
