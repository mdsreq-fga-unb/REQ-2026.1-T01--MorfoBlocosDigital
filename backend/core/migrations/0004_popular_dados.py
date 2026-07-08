from django.db import migrations


def popular_dados(apps, schema_editor):
    Morfema = apps.get_model("core", "Morfema")
    PalavraValida = apps.get_model("core", "PalavraValida")

    morfemas = [
        # Prefixos (vermelho)
        ("in", "prefixo", "bg-red-500"),
        ("des", "prefixo", "bg-red-500"),
        ("re", "prefixo", "bg-red-500"),
        # Radicais (azul)
        ("feliz", "radical", "bg-blue-600"),
        ("leal", "radical", "bg-blue-600"),
        ("fazer", "radical", "bg-blue-600"),
        ("amor", "radical", "bg-blue-600"),
        # Sufixos (amarelo)
        ("mente", "sufixo", "bg-yellow-500"),
        ("inho", "sufixo", "bg-yellow-500"),
        ("oso", "sufixo", "bg-yellow-500"),
    ]
    for texto, tipo, cor in morfemas:
        Morfema.objects.create(texto=texto, tipo=tipo, cor=cor)

    palavras = [
        ("infeliz", "Prefixação (in + feliz)"),
        ("desleal", "Prefixação (des + leal)"),
        ("refazer", "Prefixação (re + fazer)"),
        ("amorinho", "Sufixação (amor + inho)"),
        ("felizmente", "Sufixação (feliz + mente)"),
        ("amoroso", "Sufixação (amor + oso)"),
        ("infelizmente", "Prefixação + Sufixação (in + feliz + mente)"),
    ]
    for texto, processo in palavras:
        PalavraValida.objects.create(texto=texto, processo_morfologico=processo)


def remover_dados(apps, schema_editor):
    Morfema = apps.get_model("core", "Morfema")
    PalavraValida = apps.get_model("core", "PalavraValida")
    Morfema.objects.all().delete()
    PalavraValida.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0003_morfema_palavravalida"),
    ]

    operations = [
        migrations.RunPython(popular_dados, remover_dados),
    ]