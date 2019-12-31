# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Profile(models.Model):
    name = models.CharField()
    email = models.CharField()
