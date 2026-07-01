from rest_framework import serializers
from core.models import Usuario, Morfema, PalavraValida, Turma, Atividade, Pergunta


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ["id", "email", "username", "first_name", "tipo"]


class MorfemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Morfema
        fields = ["id", "texto", "tipo", "cor"]



class PalavraValidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PalavraValida
        fields = ["id", "texto", "processo_morfologico"]


class TurmaSerializer(serializers.ModelSerializer):
    total_alunos = serializers.IntegerField(source="alunos.count", read_only=True)

    class Meta:
        model = Turma
        fields = ["id", "nome", "serie", "criada_em", "total_alunos"]
        read_only_fields = ["id", "criada_em", "total_alunos"]


class AtividadeSerializer(serializers.ModelSerializer):
    """Resumo da atividade para listagem."""

    class Meta:
        model = Atividade
        fields = ["id", "titulo", "tipo", "nivel"]


class PerguntaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pergunta
        fields = ["id", "enunciado", "alternativas", "correta", "explicacao", "topico"]


class AtividadeDetailSerializer(serializers.ModelSerializer):
    perguntas = PerguntaSerializer(many=True, read_only=True)

    class Meta:
        model = Atividade
        fields = ["id", "titulo", "tipo", "nivel", "perguntas"]


class PerguntaWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pergunta
        fields = ["enunciado", "alternativas", "correta", "explicacao", "topico"]


class AtividadeCreateSerializer(serializers.ModelSerializer):
    """Criação de atividade com perguntas aninhadas (RF12)."""

    perguntas = PerguntaWriteSerializer(many=True, required=False)

    class Meta:
        model = Atividade
        fields = ["id", "titulo", "tipo", "nivel", "ativa", "perguntas"]
        read_only_fields = ["id"]

    def create(self, validated_data):
        perguntas = validated_data.pop("perguntas", [])
        atividade = Atividade.objects.create(**validated_data)
        for p in perguntas:
            Pergunta.objects.create(atividade=atividade, **p)
        return atividade


class BlocoSerializer(serializers.Serializer):
    texto = serializers.CharField()
    tipo = serializers.CharField(required=False, allow_blank=True)


class ValidarPalavraSerializer(serializers.Serializer):
    blocos = BlocoSerializer(many=True)


class RegistroSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)
    # O frontend envia o nome completo digitado pelo usuário em "first_name".
    # Tornamos obrigatório para garantir que o nome real seja sempre persistido
    # (caso contrário os dashboards exibiriam o email no lugar do nome).
    first_name = serializers.CharField(required=True, allow_blank=False)

    class Meta:
        model = Usuario
        fields = ["id", "email", "username", "first_name", "password", "tipo"]

    def create(self, validated_data):
        usuario = Usuario(
            email=validated_data["email"],
            username=validated_data["username"],
            first_name=validated_data["first_name"],
            tipo=validated_data.get("tipo", Usuario.ALUNO),
        )
        usuario.set_password(validated_data["password"])
        usuario.save()
        return usuario