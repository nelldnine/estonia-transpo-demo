# -*- coding: utf-8 -*-
# Generated by Django 1.11.14 on 2018-07-31 06:09
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_issue_samplesheet'),
    ]

    operations = [
        migrations.RenameField(
            model_name='issue',
            old_name='samplesheet',
            new_name='attachments',
        ),
    ]
