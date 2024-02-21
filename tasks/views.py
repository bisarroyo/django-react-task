from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

from django.shortcuts import render
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password


# Create your views here.

class TaskView(viewsets.ModelViewSet):
  serializer_class = TaskSerializer
  queryset = Task.objects.all()