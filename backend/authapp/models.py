from django.db import models
from django.contrib.auth.models import AbstractUser, User

# Create your models here.
class User(AbstractUser):
    name = models.TextField(null=True, blank=True)
    email = models.EmailField(unique=True)
    phone_no = models.TextField(null=True, blank=True)