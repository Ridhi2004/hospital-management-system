from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    class Role(models.TextChoices):
        PATIENT = "PATIENT", "Patient"
        DOCTOR = "DOCTOR", "Doctor"
        SUPER_ADMIN = "SUPER_ADMIN", "Super Admin"

    class Gender(models.TextChoices):
        MALE = "MALE", "Male"
        FEMALE = "FEMALE", "Female"
        OTHER = "OTHER", "Other"

    full_name = models.CharField(max_length=150)

    email = models.EmailField(unique=True)

    phone = models.CharField(max_length=20)

    date_of_birth = models.DateField(null=True, blank=True)

    gender = models.CharField(
        max_length=10,
        choices=Gender.choices,
        blank=True,
    )

    role = models.CharField(
        max_length=20,
        choices=Role.choices,
        default=Role.PATIENT,
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email
