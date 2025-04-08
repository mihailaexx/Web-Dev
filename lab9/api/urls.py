from django.urls import path

from api.views import *

urlpatterns = [
    path("companies/", CompanyListView.as_view(), name="company-list"),
    path(
        "companies/<int:company_id>/",
        CompanyDetailView.as_view(),
        name="company-detail",
    ),
    path(
        "companies/<int:company_id>/vacancies/",
        CompanyVacancyListView.as_view(),
        name="company-vacancy-list",
    ),
    # path("positions/", PositionListView.as_view(), name="position-list"),
    # path(
    #     "positions/<int:position_id>/",
    #     PositionDetailView.as_view(),
    #     name="position-detail",
    # ),
    path("vacancies/", VacanciesListView.as_view(), name="vacancy-list"),
    path(
        "vacancies/<int:vacancy_id>/",
        VacanciesDetailView.as_view(),
        name="vacancy-detail",
    ),
    path("vacancies/top_ten/", top_ten_vacancies, name="top-ten-vacancies"),
]
