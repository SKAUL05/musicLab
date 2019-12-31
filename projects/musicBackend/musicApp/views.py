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
 

# Create your views here.
@api_view(["GET"])
def checkapi(request):
    try:
        resp =  JsonResponse({'message':'Sarath Kaul'})
        resp["Access-Control-Allow-Origin"] = "http://localhost:4200"
        return resp
    except ValueError as e:
        return Response(e.args[0],status.HTTP_400_BAD_REQUEST)

@api_view(["POST","OPTIONS"])
def profile_submit(request):
    json_input = request.POST
    print(json_input)
    resp = JsonResponse({"success":True,"details":[]})
    resp["Access-Control-Allow-Origin"] = "http://localhost:4200"
    resp["Access-Control-Allow-Methods"] = 'POST, GET, OPTIONS, DELETE, PUT'
    resp["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding"

    return resp


