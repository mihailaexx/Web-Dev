from django.http import JsonResponse

from api.models import Company, Vacancy


# Create your views here.

def companies(request):
    companies = Company.objects.all()
    return JsonResponse(
        {
            "companies": [
                {
                    "id": company.id,
                    "name": company.name,
                    "description": company.description,
                    "city": company.city,
                    "address": company.address,
                }
                for company in companies
            ]
        }
    )

def company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        return JsonResponse(
            {
                "id": company.id,
                "name": company.name,
                "description": company.description,
                "city": company.city,
                "address": company.address,
            }
        )
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)

def company_vacancy(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        vacancies = company.vacancy_set.all()
        return JsonResponse(
            {
                "vacancies": [
                    {
                        "id": vacancy.id,
                        "name": vacancy.name,
                        "description": vacancy.description,
                        "salary": vacancy.salary,
                    }
                    for vacancy in vacancies
                ]
            }
        )
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)

def vacancies(request):
    vacancies = Vacancy.objects.all()
    return JsonResponse(
        {
            "vacancies": [
                {
                    "id": vacancy.id,
                    "name": vacancy.name,
                    "description": vacancy.description,
                    "salary": vacancy.salary,
                }
                for vacancy in vacancies
            ]
        }
    )

def vacancy(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
        return JsonResponse(
            {
                "id": vacancy.id,
                "name": vacancy.name,
                "description": vacancy.description,
                "salary": vacancy.salary,
            }
        )
    except Vacancy.DoesNotExist:
        return JsonResponse({"error": "Vacancy not found"}, status=404)

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by("-salary")[:10]
    return JsonResponse(
        {
            "vacancies": [
                {
                    "id": vacancy.id,
                    "name": vacancy.name,
                    "description": vacancy.description,
                    "salary": vacancy.salary,
                }
                for vacancy in vacancies
            ]
        }
    )