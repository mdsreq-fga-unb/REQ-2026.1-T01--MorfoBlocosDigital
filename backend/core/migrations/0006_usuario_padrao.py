from django.db import migrations


def criar_usuario_padrao(apps, schema_editor):
    Usuario = apps.get_model("core", "Usuario")
    from django.contrib.auth.hashers import make_password

    # Aluno padrão
    if not Usuario.objects.filter(email="aluno@morfo.com").exists():
        Usuario.objects.create(
            email="aluno@morfo.com",
            username="aluno_demo",
            password=make_password("morfo123"),
            tipo="aluno",
            is_active=True,
        )

    # Professor padrão
    if not Usuario.objects.filter(email="professor@morfo.com").exists():
        Usuario.objects.create(
            email="professor@morfo.com",
            username="professor_demo",
            password=make_password("morfo123"),
            tipo="professor",
            is_active=True,
        )


def remover_usuario_padrao(apps, schema_editor):
    Usuario = apps.get_model("core", "Usuario")
    Usuario.objects.filter(email__in=["aluno@morfo.com", "professor@morfo.com"]).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0005_tentativa"),
    ]

    operations = [
        migrations.RunPython(criar_usuario_padrao, remover_usuario_padrao),
    ]