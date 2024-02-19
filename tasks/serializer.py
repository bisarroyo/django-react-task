from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
  class Meta:
    model= Task
    fields = '__all__'
    # extra_kwargs = {'title': {'required': False}, 'description': {'required': False}}