from django.http import JsonResponse

from api.models import Company, Vacancy


# Create your views here.

def companies(request):
    return JsonResponse([c.to_json() for c in Company.objects.all()], safe=False)

def company(request, company_id):
    try:
        return JsonResponse(Company.objects.get(id=company_id).to_json())
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)

def company_vacancy(request, company_id):
    try:
        return JsonResponse([v.to_json() for v in Company.objects.get(id=company_id).vacancy_set.all()], safe=False)
    except Company.DoesNotExist:
        return JsonResponse({"error": "Company not found"}, status=404)

def vacancies(request):
    return JsonResponse([v.to_json() for v in Vacancy.objects.all()], safe=False)

def vacancy(request, vacancy_id):
    try:
        return JsonResponse(Vacancy.objects.get(id=vacancy_id).to_json())
    except Vacancy.DoesNotExist:
        return JsonResponse({"error": "Vacancy not found"}, status=404)

def top_ten_vacancies(request):
    return JsonResponse([v.to_json() for v in Vacancy.objects.order_by("-salary")[:10]], safe=False)