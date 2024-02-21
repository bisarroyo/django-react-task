from django.contrib.auth.models import AbstractBaseUser
from django.db import models

# Create your models here.

class Task (models.Model):
  title = models.CharField(max_length = 200)
  description = models.TextField(max_length = 500)
  completed = models.BooleanField(default = False)
  createdAt = models.DateField(auto_now = True) 

  def __str__(self):
    return self.title

class User(AbstractUser):
    # Add any additional fields you want in your custom user model
    email = models.CharField(max_length=250, unique=True, null=False, blank=False)
    REGISTRATION_CHOICES = [
        ('email', 'Email'),
        ('google', 'Google'),
    ]
    registration_method = models.CharField(
        max_length=10,
        choices=REGISTRATION_CHOICES,
        default='email'
    )

    def __str__(self):
       return self.username