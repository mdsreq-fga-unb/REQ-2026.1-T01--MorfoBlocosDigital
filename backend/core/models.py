from django.contrib.auth.models import AbstractUser
from django.db import models


class Usuario(AbstractUser):
    PROFESSOR = "professor"
    ALUNO = "aluno"
    TIPO_CHOICES = [
        (PROFESSOR, "Professor"),
        (ALUNO, "Aluno"),
    ]

    email = models.EmailField(unique=True)
    tipo = models.CharField(max_length=10, choices=TIPO_CHOICES, default=ALUNO)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email