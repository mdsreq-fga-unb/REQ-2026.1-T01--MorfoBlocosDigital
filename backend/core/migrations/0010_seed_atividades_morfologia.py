from django.db import migrations


QUIZZES = [
    {"titulo": "Quiz: Radicais (verbos)", "nivel": 1, "perguntas": [   {   'alternativas': ['am-', 'ger-', 'viv-', 'convenc-'],
        'correta': 0,
        'enunciado': 'Qual é o radical da palavra "amar"?',
        'explicacao': 'O radical de "amar" é "am-", a parte que carrega o significado básico.',
        'topico': 'Radicais'},
    {   'alternativas': ['program-', 'and-', 'constru-', 'consum-'],
        'correta': 1,
        'enunciado': 'Qual é o radical da palavra "andar"?',
        'explicacao': 'O radical de "andar" é "and-", a parte que carrega o significado básico.',
        'topico': 'Radicais'},
    {   'alternativas': ['ganh-', 'implod-', 'ajud-', 'antev-'],
        'correta': 2,
        'enunciado': 'Qual é o radical da palavra "ajudar"?',
        'explicacao': 'O radical de "ajudar" é "ajud-", a parte que carrega o significado básico.',
        'topico': 'Radicais'},
    {   'alternativas': ['merec-', 'met-', 'gost-', 'aplic-'],
        'correta': 3,
        'enunciado': 'Qual é o radical da palavra "aplicar"?',
        'explicacao': 'O radical de "aplicar" é "aplic-", a parte que carrega o significado '
                      'básico.',
        'topico': 'Radicais'},
    {   'alternativas': ['pass-', 'rev-', 'estend-', 'arrum-'],
        'correta': 3,
        'enunciado': 'Qual é o radical da palavra "arrumar"?',
        'explicacao': 'O radical de "arrumar" é "arrum-", a parte que carrega o significado '
                      'básico.',
        'topico': 'Radicais'},
    {   'alternativas': ['atac-', 'aprend-', 'sort-', 'repet-'],
        'correta': 0,
        'enunciado': 'Qual é o radical da palavra "atacar"?',
        'explicacao': 'O radical de "atacar" é "atac-", a parte que carrega o significado básico.',
        'topico': 'Radicais'},
    {   'alternativas': ['infer-', 'baix-', 'transfer-', 'estud-'],
        'correta': 1,
        'enunciado': 'Qual é o radical da palavra "baixar"?',
        'explicacao': 'O radical de "baixar" é "baix-", a parte que carrega o significado básico.',
        'topico': 'Radicais'},
    {   'alternativas': ['brinc-', 'interv-', 'varr-', 'lamb-'],
        'correta': 0,
        'enunciado': 'Qual é o radical da palavra "brincar"?',
        'explicacao': 'O radical de "brincar" é "brinc-", a parte que carrega o significado '
                      'básico.',
        'topico': 'Radicais'},
    {   'alternativas': ['cant-', 'compet-', 'us-', 'merec-'],
        'correta': 0,
        'enunciado': 'Qual é o radical da palavra "cantar"?',
        'explicacao': 'O radical de "cantar" é "cant-", a parte que carrega o significado básico.',
        'topico': 'Radicais'},
    {   'alternativas': ['cas-', 'descans-', 'olh-', 'prov-'],
        'correta': 0,
        'enunciado': 'Qual é o radical da palavra "casar"?',
        'explicacao': 'O radical de "casar" é "cas-", a parte que carrega o significado básico.',
        'topico': 'Radicais'}]},
    {"titulo": "Quiz: Vogal Temática", "nivel": 1, "perguntas": [   {   'alternativas': ['a', 'e', 'i', '∅ (nenhuma)'],
        'correta': 0,
        'enunciado': 'Qual é a vogal temática em "amar"?',
        'explicacao': 'A vogal temática de "amar" é "a".',
        'topico': 'Vogal Temática'},
    {   'alternativas': ['a', 'e', 'i', '∅ (nenhuma)'],
        'correta': 2,
        'enunciado': 'Qual é a vogal temática em "abrir"?',
        'explicacao': 'A vogal temática de "abrir" é "i".',
        'topico': 'Vogal Temática'},
    {   'alternativas': ['a', 'e', 'i', '∅ (nenhuma)'],
        'correta': 3,
        'enunciado': 'Qual é a vogal temática em "hospitalizo"?',
        'explicacao': 'A vogal temática de "hospitalizo" é "∅ (nenhuma)".',
        'topico': 'Vogal Temática'},
    {   'alternativas': ['a', 'e', 'i', '∅ (nenhuma)'],
        'correta': 0,
        'enunciado': 'Qual é a vogal temática em "andar"?',
        'explicacao': 'A vogal temática de "andar" é "a".',
        'topico': 'Vogal Temática'},
    {   'alternativas': ['a', 'e', 'i', '∅ (nenhuma)'],
        'correta': 2,
        'enunciado': 'Qual é a vogal temática em "admitir"?',
        'explicacao': 'A vogal temática de "admitir" é "i".',
        'topico': 'Vogal Temática'},
    {   'alternativas': ['a', 'e', 'i', '∅ (nenhuma)'],
        'correta': 3,
        'enunciado': 'Qual é a vogal temática em "festejo"?',
        'explicacao': 'A vogal temática de "festejo" é "∅ (nenhuma)".',
        'topico': 'Vogal Temática'},
    {   'alternativas': ['a', 'e', 'i', '∅ (nenhuma)'],
        'correta': 0,
        'enunciado': 'Qual é a vogal temática em "ajudar"?',
        'explicacao': 'A vogal temática de "ajudar" é "a".',
        'topico': 'Vogal Temática'},
    {   'alternativas': ['a', 'e', 'i', '∅ (nenhuma)'],
        'correta': 2,
        'enunciado': 'Qual é a vogal temática em "advir"?',
        'explicacao': 'A vogal temática de "advir" é "i".',
        'topico': 'Vogal Temática'},
    {   'alternativas': ['a', 'e', 'i', '∅ (nenhuma)'],
        'correta': 3,
        'enunciado': 'Qual é a vogal temática em "saltito"?',
        'explicacao': 'A vogal temática de "saltito" é "∅ (nenhuma)".',
        'topico': 'Vogal Temática'},
    {   'alternativas': ['a', 'e', 'i', '∅ (nenhuma)'],
        'correta': 0,
        'enunciado': 'Qual é a vogal temática em "aplicar"?',
        'explicacao': 'A vogal temática de "aplicar" é "a".',
        'topico': 'Vogal Temática'}]},
    {"titulo": "Quiz: Sufixos derivacionais (denominais)", "nivel": 2, "perguntas": [   {   'alternativas': ['-iz-', '-ej-', '-it-', '-inho-'],
        'correta': 0,
        'enunciado': 'Qual é o sufixo que forma o verbo denominal "hospitalizar"?',
        'explicacao': 'O verbo "hospitalizar" é formado pelo sufixo derivacional "-iz-".',
        'topico': 'Sufixos'},
    {   'alternativas': ['-iz-', '-ej-', '-it-', '-inho-'],
        'correta': 0,
        'enunciado': 'Qual é o sufixo que forma o verbo denominal "socializar"?',
        'explicacao': 'O verbo "socializar" é formado pelo sufixo derivacional "-iz-".',
        'topico': 'Sufixos'},
    {   'alternativas': ['-iz-', '-ej-', '-it-', '-inho-'],
        'correta': 0,
        'enunciado': 'Qual é o sufixo que forma o verbo denominal "realizar"?',
        'explicacao': 'O verbo "realizar" é formado pelo sufixo derivacional "-iz-".',
        'topico': 'Sufixos'},
    {   'alternativas': ['-iz-', '-ej-', '-it-', '-inho-'],
        'correta': 0,
        'enunciado': 'Qual é o sufixo que forma o verbo denominal "finalizar"?',
        'explicacao': 'O verbo "finalizar" é formado pelo sufixo derivacional "-iz-".',
        'topico': 'Sufixos'},
    {   'alternativas': ['-iz-', '-ej-', '-it-', '-inho-'],
        'correta': 0,
        'enunciado': 'Qual é o sufixo que forma o verbo denominal "modernizar"?',
        'explicacao': 'O verbo "modernizar" é formado pelo sufixo derivacional "-iz-".',
        'topico': 'Sufixos'},
    {   'alternativas': ['-iz-', '-ej-', '-it-', '-inho-'],
        'correta': 1,
        'enunciado': 'Qual é o sufixo que forma o verbo denominal "festejar"?',
        'explicacao': 'O verbo "festejar" é formado pelo sufixo derivacional "-ej-".',
        'topico': 'Sufixos'},
    {   'alternativas': ['-iz-', '-ej-', '-it-', '-inho-'],
        'correta': 2,
        'enunciado': 'Qual é o sufixo que forma o verbo denominal "saltitar"?',
        'explicacao': 'O verbo "saltitar" é formado pelo sufixo derivacional "-it-".',
        'topico': 'Sufixos'},
    {   'alternativas': ['-iz-', '-ej-', '-it-', '-inho-'],
        'correta': 2,
        'enunciado': 'Qual é o sufixo que forma o verbo denominal "dormitar"?',
        'explicacao': 'O verbo "dormitar" é formado pelo sufixo derivacional "-it-".',
        'topico': 'Sufixos'}]},
]

MORFEMAS = [   ('central', 'radical', 'bg-blue-600'),
    ('cristal', 'radical', 'bg-blue-600'),
    ('fest', 'radical', 'bg-blue-600'),
    ('final', 'radical', 'bg-blue-600'),
    ('formal', 'radical', 'bg-blue-600'),
    ('global', 'radical', 'bg-blue-600'),
    ('hospital', 'radical', 'bg-blue-600'),
    ('legal', 'radical', 'bg-blue-600'),
    ('modern', 'radical', 'bg-blue-600'),
    ('real', 'radical', 'bg-blue-600'),
    ('social', 'radical', 'bg-blue-600'),
    ('iz', 'sufixo', 'bg-yellow-500'),
    ('ej', 'sufixo', 'bg-yellow-500'),
    ('ar', 'sufixo', 'bg-yellow-500')]

PALAVRAS = [   ('hospitalizar', 'Derivação denominal (hospital + iz + ar)'),
    ('socializar', 'Derivação denominal (social + iz + ar)'),
    ('centralizar', 'Derivação denominal (central + iz + ar)'),
    ('cristalizar', 'Derivação denominal (cristal + iz + ar)'),
    ('finalizar', 'Derivação denominal (final + iz + ar)'),
    ('legalizar', 'Derivação denominal (legal + iz + ar)'),
    ('realizar', 'Derivação denominal (real + iz + ar)'),
    ('modernizar', 'Derivação denominal (modern + iz + ar)'),
    ('formalizar', 'Derivação denominal (formal + iz + ar)'),
    ('globalizar', 'Derivação denominal (global + iz + ar)'),
    ('festejar', 'Derivação denominal (fest + ej + ar)')]


def popular(apps, schema_editor):
    Atividade = apps.get_model("core", "Atividade")
    Pergunta = apps.get_model("core", "Pergunta")
    Morfema = apps.get_model("core", "Morfema")
    PalavraValida = apps.get_model("core", "PalavraValida")

    for quiz in QUIZZES:
        atividade = Atividade.objects.create(
            titulo=quiz["titulo"], tipo="quiz", nivel=quiz["nivel"], ativa=True
        )
        for p in quiz["perguntas"]:
            Pergunta.objects.create(atividade=atividade, **p)

    # Atividade de montagem (catálogo); o jogo de blocos usa o catálogo global.
    Atividade.objects.create(
        titulo="Montagem: verbos denominais", tipo="montagem", nivel=1, ativa=True
    )

    for texto, tipo, cor in MORFEMAS:
        Morfema.objects.get_or_create(texto=texto, tipo=tipo, defaults={"cor": cor})

    for texto, processo in PALAVRAS:
        PalavraValida.objects.get_or_create(
            texto=texto, defaults={"processo_morfologico": processo}
        )


def remover(apps, schema_editor):
    Atividade = apps.get_model("core", "Atividade")
    Morfema = apps.get_model("core", "Morfema")
    PalavraValida = apps.get_model("core", "PalavraValida")

    titulos = [q["titulo"] for q in QUIZZES] + ["Montagem: verbos denominais"]
    Atividade.objects.filter(titulo__in=titulos).delete()
    Morfema.objects.filter(texto__in=[m[0] for m in MORFEMAS]).delete()
    PalavraValida.objects.filter(texto__in=[p[0] for p in PALAVRAS]).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0009_seed_quiz"),
    ]

    operations = [
        migrations.RunPython(popular, remover),
    ]
