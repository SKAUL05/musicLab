# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2020-01-01 06:11
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('musicApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='createdOn',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]