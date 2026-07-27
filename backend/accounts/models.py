from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class User(AbstractUser):
    class Role(models.TextChoices):
        PATIENT = "PATIENT", "Patient"
        DOCTOR = "DOCTOR" , "Doctor"
        SUPER_ADMIN = "SUPER_ADMIN" , "Super Admin"


    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20, blank=True, unique=True)
    role = models.CharField(
        max_length=20,
        choices=Role.choices,
        default=Role.PATIENT,
    ) 

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email   