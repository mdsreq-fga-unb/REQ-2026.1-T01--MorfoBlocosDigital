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
    # Turma à qual o aluno pertence (RF23). Nulo para professores/admins.
    turma = models.ForeignKey(
        "Turma",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="alunos",
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.email


class Turma(models.Model):
    nome = models.CharField(max_length=100)
    serie = models.CharField(max_length=50, blank=True)
    professor = models.ForeignKey(
        Usuario,
        on_delete=models.CASCADE,
        related_name="turmas_lecionadas",
    )
    criada_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome


class Morfema(models.Model):
    PREFIXO = "prefixo"
    RADICAL = "radical"
    SUFIXO = "sufixo"
    TIPO_CHOICES = [
        (PREFIXO, "Prefixo"),
        (RADICAL, "Radical"),
        (SUFIXO, "Sufixo"),
    ]

    texto = models.CharField(max_length=50)
    tipo = models.CharField(max_length=10, choices=TIPO_CHOICES)
    cor = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return f"{self.texto} ({self.tipo})"
    


class PalavraValida(models.Model):
    texto = models.CharField(max_length=100, unique=True)
    processo_morfologico = models.CharField(max_length=200)

    def __str__(self):
        return self.texto



class Atividade(models.Model):
    QUIZ = "quiz"
    MONTAGEM = "montagem"
    TIPO_CHOICES = [
        (QUIZ, "Quiz"),
        (MONTAGEM, "Montagem de palavras"),
    ]

    titulo = models.CharField(max_length=120)
    tipo = models.CharField(max_length=10, choices=TIPO_CHOICES, default=QUIZ)
    nivel = models.PositiveIntegerField(default=1)
    ativa = models.BooleanField(default=True)
    criada_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.titulo} (nível {self.nivel})"


class Pergunta(models.Model):
    atividade = models.ForeignKey(
        Atividade,
        on_delete=models.CASCADE,
        related_name="perguntas",
    )
    enunciado = models.CharField(max_length=300)
    # Lista de strings com as alternativas.
    alternativas = models.JSONField(default=list)
    # Índice (0-based) da alternativa correta dentro de "alternativas".
    correta = models.PositiveIntegerField(default=0)
    explicacao = models.CharField(max_length=500, blank=True)
    topico = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.enunciado[:50]


class Tentativa(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name="tentativas")
    palavra = models.CharField(max_length=100)
    acertou = models.BooleanField()
    data = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        resultado = "acertou" if self.acertou else "errou"
        return f"{self.usuario.email} - {self.palavra} ({resultado})"
