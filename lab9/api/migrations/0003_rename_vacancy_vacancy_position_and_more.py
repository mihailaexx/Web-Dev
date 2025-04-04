# Generated by Django 5.2rc1 on 2025-04-02 07:52

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0002_position_vacancy_vacancy"),
    ]

    operations = [
        migrations.RenameField(
            model_name="vacancy",
            old_name="vacancy",
            new_name="position",
        ),
        migrations.AlterField(
            model_name="vacancy",
            name="company",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="api.company",
            ),
        ),
    ]
