import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Company} from '../company';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-company',
  imports: [CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})

export class CompanyComponent implements OnInit {
  companies: Company[] = []

  constructor( private httpclient: HttpClient) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.httpclient.get<Company[]>('http://127.0.0.1:8000/api/companies/').subscribe((response: any) =>
    {
      this.companies = response;
    })
  }
}
