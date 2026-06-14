from rest_framework import serializers
from core.models import Usuario, Morfema


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ["id", "email", "username", "tipo"]


class MorfemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Morfema
        fields = ["id", "texto", "tipo", "cor"]



class BlocoSerializer(serializers.Serializer):
    texto = serializers.CharField()
    tipo = serializers.CharField(required=False, allow_blank=True)


class ValidarPalavraSerializer(serializers.Serializer):
    blocos = BlocoSerializer(many=True)


class RegistroSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = Usuario
        fields = ["id", "email", "username", "password", "tipo"]

    def create(self, validated_data):
        usuario = Usuario(
            email=validated_data["email"],
            username=validated_data["username"],
            tipo=validated_data.get("tipo", Usuario.ALUNO),
        )
        usuario.set_password(validated_data["password"])
        usuario.save()
        return usuario