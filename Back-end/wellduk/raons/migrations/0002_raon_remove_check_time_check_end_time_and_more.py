# Generated by Django 4.2.4 on 2023-08-22 03:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('raons', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Raon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('maximum', models.IntegerField(default=30)),
                ('current', models.IntegerField(default=0)),
            ],
        ),
        migrations.RemoveField(
            model_name='check',
            name='time',
        ),
        migrations.AddField(
            model_name='check',
            name='end_time',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='check',
            name='start_time',
            field=models.DateTimeField(auto_now=True),
        ),
    ]