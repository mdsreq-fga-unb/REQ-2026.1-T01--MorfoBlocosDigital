from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0007_turma_usuario_turma"),
    ]

    operations = [
        migrations.CreateModel(
            name="Atividade",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("titulo", models.CharField(max_length=120)),
                ("tipo", models.CharField(choices=[("quiz", "Quiz"), ("montagem", "Montagem de palavras")], default="quiz", max_length=10)),
                ("nivel", models.PositiveIntegerField(default=1)),
                ("ativa", models.BooleanField(default=True)),
                ("criada_em", models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name="Pergunta",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("enunciado", models.CharField(max_length=300)),
                ("alternativas", models.JSONField(default=list)),
                ("correta", models.PositiveIntegerField(default=0)),
                ("explicacao", models.CharField(blank=True, max_length=500)),
                ("topico", models.CharField(blank=True, max_length=50)),
                (
                    "atividade",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="perguntas",
                        to="core.atividade",
                    ),
                ),
            ],
        ),
    ]
