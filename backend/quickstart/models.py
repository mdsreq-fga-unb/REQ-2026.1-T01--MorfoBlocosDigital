from django.db import models
from django.contrib.auth.models import User


class Morfema(models.Model):

    TIPOS = [
        ('PREFIXO', 'Prefixo'),
        ('RADICAL', 'Radical'),
        ('SUFIXO', 'Sufixo'),
        ('VOGAL_TEMATICA', 'Vogal Temática'),
        ('DESINENCIA', 'Desinência'),
    ]

    grafia = models.CharField(max_length=50)

    tipo = models.CharField(
        max_length=20,
        choices=TIPOS
    )

    def __str__(self):
        return self.grafia


class PalavraValida(models.Model):

    PROCESSOS = [
        ('PREFIXAL', 'Derivação Prefixal'),
        ('SUFIXAL', 'Derivação Sufixal'),
        ('PREFIXAL_SUFIXAL', 'Derivação Prefixal e Sufixal'),
        ('PARASSINTETICA', 'Derivação Parassintética'),
    ]

    palavra = models.CharField(
        max_length=100,
        unique=True
    )

    processo_morfologico = models.CharField(
        max_length=30,
        choices=PROCESSOS
    )

    def __str__(self):
        return self.palavra


class PalavraMorfema(models.Model):

    palavra = models.ForeignKey(
        PalavraValida,
        on_delete=models.CASCADE,
        related_name="morfemas"
    )

    morfema = models.ForeignKey(
        Morfema,
        on_delete=models.CASCADE
    )

    ordem = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.palavra} - {self.morfema}"


# 🟦 RESUMO DA TENTATIVA (o "todo")
class Tentativa(models.Model):

    usuario = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    palavra = models.ForeignKey(
        PalavraValida,
        on_delete=models.CASCADE
    )

    palavra_montada = models.CharField(
        max_length=100
    )

    correta = models.BooleanField(default=False)

    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.usuario} - {self.palavra_montada}"


# 🟩 DETALHES DA TENTATIVA (os blocos usados)
class TentativaMorfema(models.Model):

    tentativa = models.ForeignKey(
        Tentativa,
        on_delete=models.CASCADE,
        related_name="morfemas_usados"
    )

    morfema = models.ForeignKey(
        Morfema,
        on_delete=models.CASCADE
    )

    ordem = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.tentativa} - {self.morfema}"