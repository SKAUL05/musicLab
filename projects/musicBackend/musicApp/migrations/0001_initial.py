# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2019-12-31 12:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profileName', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
            ],
        ),
    ]
