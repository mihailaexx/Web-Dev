from django.urls import path

from api.views import *

urlpatterns = [
    path('companies/', companies, name='company-list'),
    path('companies/<int:company_id>/', company, name='company-detail'),
    path('companies/<int:company_id>/vacancies/', company_vacancy, name='company-vacancy-list'),
    path('vacancies/', vacancies, name='vacancy-list'),
    path('vacancies/<int:vacancy_id>/', vacancy, name='vacancy-detail'),
    path('vacancies/top_ten/', top_ten_vacancies, name='top-ten-vacancies'),
]