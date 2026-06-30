from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from core.models import Usuario, Morfema, PalavraValida, Turma, Atividade, Pergunta


@admin.register(Usuario)
class UsuarioAdmin(UserAdmin):
    list_display = ("email", "username", "tipo", "turma", "is_staff")
    list_filter = ("tipo", "turma", "is_staff", "is_active")
    search_fields = ("email", "username")
    ordering = ("email",)


@admin.register(Turma)
class TurmaAdmin(admin.ModelAdmin):
    list_display = ("nome", "serie", "professor", "criada_em")
    search_fields = ("nome",)


class PerguntaInline(admin.TabularInline):
    model = Pergunta
    extra = 1


@admin.register(Atividade)
class AtividadeAdmin(admin.ModelAdmin):
    list_display = ("titulo", "tipo", "nivel", "ativa", "criada_em")
    list_filter = ("tipo", "nivel", "ativa")
    search_fields = ("titulo",)
    inlines = [PerguntaInline]


@admin.register(Morfema)
class MorfemaAdmin(admin.ModelAdmin):
    list_display = ("texto", "tipo", "cor")
    list_filter = ("tipo",)
    search_fields = ("texto",)


@admin.register(PalavraValida)
class PalavraValidaAdmin(admin.ModelAdmin):
    list_display = ("texto", "processo_morfologico")
    search_fields = ("texto",)


from core.models import Tentativa


@admin.register(Tentativa)
class TentativaAdmin(admin.ModelAdmin):
    list_display = ("usuario", "palavra", "acertou", "data")
    list_filter = ("acertou", "data")
    search_fields = ("palavra", "usuario__email")
