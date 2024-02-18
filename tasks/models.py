from django.db import models

# Create your models here.

class Task (models.Model):
  title = models.CharField(max_length = 200)
  description = models.TextField(max_length = 500)
  completed = models.BooleanField(default = False)
  createdAt = models.DateField(auto_now = True) 

  def __str__(self):
    return self.title