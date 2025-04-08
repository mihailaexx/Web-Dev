import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacancy } from '../vacancy';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy',
  imports: [CommonModule],
  templateUrl: './vacancy.component.html',
  styleUrl: './vacancy.component.css'
})
export class VacancyComponent implements OnInit {
  companyId: number = 0;
  companyName: string = '';
  vacancies: Vacancy[] = []

  constructor( private route: ActivatedRoute, private httpclient: HttpClient) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.companyId = +params['id'];
      this.getVacancies();
      this.getCompanyName();
    })
  }

  getVacancies() {
    this.httpclient.get<Vacancy[]>('http://127.0.0.1:8000/api/companies/' + this.companyId + '/vacancies').subscribe((response: any) =>
    {
      this.vacancies = response;
    })
  }

  getCompanyName() {
    this.httpclient.get('http://127.0.0.1:8000/api/companies/' + this.companyId + '/').subscribe((response: any) =>
    {
      this.companyName = response.name;
    })
  }
}
