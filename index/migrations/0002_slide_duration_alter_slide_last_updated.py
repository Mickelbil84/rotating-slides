# Generated by Django 5.1.5 on 2025-02-01 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='slide',
            name='duration',
            field=models.IntegerField(default=10),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='slide',
            name='last_updated',
            field=models.TextField(),
        ),
    ]
