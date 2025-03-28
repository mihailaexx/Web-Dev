from django.contrib import admin

from .models import Company, Vacancy

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "description", "city", "address")
    search_fields = ("id", "name")
    ordering = ("id",)
    list_filter = ("city",)

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "description", "salary", "company")
    search_fields = ("id", "name", "company__name")
    ordering = ("id", "salary", "company__name", "salary")
    list_filter = ("salary", "company__name")