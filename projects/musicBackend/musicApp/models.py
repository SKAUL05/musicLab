# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Profile(models.Model):
    profileName = models.CharField(max_length = 50)
    email = models.CharField(max_length = 50)

    name = "Profile"