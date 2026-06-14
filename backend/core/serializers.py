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
