from django.db import migrations


QUIZZES = [
    {
        "titulo": "Quiz de Morfologia — Nível 1",
        "nivel": 1,
        "perguntas": [
            {
                "enunciado": 'Qual é o prefixo da palavra "infeliz"?',
                "alternativas": ["in-", "feliz", "-iz", "fel-"],
                "correta": 0,
                "explicacao": 'O prefixo "in-" indica negação, transformando "feliz" em "infeliz".',
                "topico": "Prefixos",
            },
            {
                "enunciado": 'A palavra "amorzinho" possui qual sufixo?',
                "alternativas": ["-or", "-inho", "amor-", "-zi"],
                "correta": 1,
                "explicacao": 'O sufixo "-inho" indica diminutivo ou afetividade.',
                "topico": "Sufixos",
            },
            {
                "enunciado": 'Qual é o radical da palavra "pedreiro"?',
                "alternativas": ["-eiro", "pe-", "pedr-", "-dre"],
                "correta": 2,
                "explicacao": 'O radical "pedr-" carrega o significado básico da palavra.',
                "topico": "Radicais",
            },
            {
                "enunciado": 'A palavra "desleal" é formada por:',
                "alternativas": ["Prefixo + Radical", "Radical + Sufixo", "Só Radical", "Dois Radicais"],
                "correta": 0,
                "explicacao": 'O prefixo "des-" indica negação somado ao radical "leal".',
                "topico": "Derivação",
            },
            {
                "enunciado": 'A palavra "guarda-chuva" é um exemplo de:',
                "alternativas": ["Derivação", "Composição", "Prefixação", "Sufixação"],
                "correta": 1,
                "explicacao": "A composição une duas palavras independentes para formar uma nova.",
                "topico": "Composição",
            },
        ],
    },
    {
        "titulo": "Quiz de Morfologia — Nível 2",
        "nivel": 2,
        "perguntas": [
            {
                "enunciado": 'A palavra "infelizmente" é formada por:',
                "alternativas": ["Prefixo + Radical", "Radical + Sufixo", "Prefixo + Radical + Sufixo", "Dois Radicais + Sufixo"],
                "correta": 2,
                "explicacao": '"in-" (prefixo) + "feliz" (radical) + "-mente" (sufixo): derivação prefixal e sufixal.',
                "topico": "Derivação",
            },
            {
                "enunciado": "Qual palavra abaixo é formada por composição por aglutinação?",
                "alternativas": ["guarda-chuva", "planalto", "passatempo", "beija-flor"],
                "correta": 1,
                "explicacao": '"Planalto" (plano + alto) é aglutinação, pois há fusão e perda fonética.',
                "topico": "Composição",
            },
            {
                "enunciado": 'O morfema "-ável" em "amável" é classificado como:',
                "alternativas": ["Sufixo nominal", "Sufixo verbal", "Sufixo adjetival", "Desinência"],
                "correta": 2,
                "explicacao": 'O sufixo "-ável" forma adjetivos a partir de verbos, indicando possibilidade.',
                "topico": "Sufixos",
            },
            {
                "enunciado": 'Em "desencanto", quantos morfemas existem?',
                "alternativas": ["1", "2", "3", "4"],
                "correta": 2,
                "explicacao": '"des-" (prefixo) + "en-" (prefixo) + "canto" (radical) = 3 morfemas.',
                "topico": "Prefixos",
            },
            {
                "enunciado": 'A vogal temática de "cantar" é:',
                "alternativas": ["c", "a", "n", "r"],
                "correta": 1,
                "explicacao": 'A vogal temática "a" indica que o verbo pertence à 1ª conjugação.',
                "topico": "Radicais",
            },
        ],
    },
]


def popular_quiz(apps, schema_editor):
    Atividade = apps.get_model("core", "Atividade")
    Pergunta = apps.get_model("core", "Pergunta")

    for quiz in QUIZZES:
        atividade = Atividade.objects.create(
            titulo=quiz["titulo"],
            tipo="quiz",
            nivel=quiz["nivel"],
            ativa=True,
        )
        for p in quiz["perguntas"]:
            Pergunta.objects.create(atividade=atividade, **p)


def remover_quiz(apps, schema_editor):
    Atividade = apps.get_model("core", "Atividade")
    Atividade.objects.filter(tipo="quiz", titulo__startswith="Quiz de Morfologia").delete()


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0008_atividade_pergunta"),
    ]

    operations = [
        migrations.RunPython(popular_quiz, remover_quiz),
    ]
