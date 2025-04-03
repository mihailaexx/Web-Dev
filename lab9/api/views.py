from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from api.models import Company, Position, Vacancy
from api.serializers import PositionSerializer, VacancySerializer


def companies(request):
    return JsonResponse([c.to_json() for c in Company.objects.all()], safe=False)


def company(request, company_id):
    try:
        return JsonResponse(Company.objects.get(id=company_id).to_json())
    except Company.DoesNotExist:
        return JsonResponse(
            {"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND
        )


def company_vacancy(request, company_id):
    try:
        return JsonResponse(
            [v.to_json() for v in Company.objects.get(id=company_id).vacancy_set.all()],
            safe=False,
        )
    except Company.DoesNotExist:
        return JsonResponse(
            {"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND
        )


class PositionListView(APIView):
    def get(self, request):
        positions = Position.objects.all()
        serializer = PositionSerializer(positions, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PositionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PositionDetailView(APIView):
    def get(self, request, position_id):
        try:
            position = Position.objects.get(id=position_id)
            serializer = PositionSerializer(position)
            return Response(serializer.data)
        except Position.DoesNotExist:
            return Response(
                {"error": "Position not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request, position_id):
        try:
            position = Position.objects.get(id=position_id)
            serializer = PositionSerializer(position, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Position.DoesNotExist:
            return Response(
                {"error": "Position not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def delete(self, request, position_id):
        try:
            position = Position.objects.get(id=position_id)
            position.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Position.DoesNotExist:
            return Response(
                {"error": "Position not found"}, status=status.HTTP_404_NOT_FOUND
            )


class VacanciesListView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VacanciesDetailView(APIView):
    def get(self, request, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(id=vacancy_id)
            serializer = VacancySerializer(vacancy)
            return Response(serializer.data)
        except Vacancy.DoesNotExist:
            return Response(
                {"error": "Vacancy not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(id=vacancy_id)
            serializer = VacancySerializer(vacancy, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Vacancy.DoesNotExist:
            return Response(
                {"error": "Vacancy not found"}, status=status.HTTP_404_NOT_FOUND
            )

    def delete(self, request, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(id=vacancy_id)
            vacancy.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Vacancy.DoesNotExist:
            return Response(
                {"error": "Vacancy not found"}, status=status.HTTP_404_NOT_FOUND
            )


def top_ten_vacancies(request):
    return JsonResponse(
        [v.to_json() for v in Vacancy.objects.order_by("-salary")[:10]], safe=False
    )
