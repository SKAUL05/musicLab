# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView
 
 
# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.utils import json
from rest_framework import serializers
from rest_framework import viewsets
import json
from models import Profile
 

# Create your views here.


@api_view(["POST","OPTIONS"])
def profile_submit(request):
    details = {}
    if json_input := request.body:
        json_input = json.loads(json_input.decode('utf-8'))
        Profile.objects.all().delete()
        profile = Profile()
        profile.email = json_input['email']
        profile.profileName = json_input['name']
        profile.save()
        details = {"message":"Saved Successfully!!!"}

    return JsonResponse({"success":True,"details":details})


