# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-08-09 06:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0013_auto_20180801_0454'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rideorder',
            name='status',
            field=models.CharField(choices=[('New', 'New'), ('Directed', 'Directed')], default='New', max_length=30),
        ),
    ]
