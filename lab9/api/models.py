from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()

    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "city": self.city,
            "address": self.address,
        }

    def __str__(self):
        return self.name


class Position(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
        }

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField(null=True, blank=True)
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE, null=True, blank=True
    )
    position = models.ForeignKey(
        Position, on_delete=models.CASCADE, null=True, blank=True
    )

    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "salary": self.salary,
            "company_id": self.company_id,
        }

    def __str__(self):
        return self.name
