from rest_framework import serializers

from .models import (
    Morfema,
    PalavraValida,
    PalavraMorfema,
    Tentativa,
    TentativaMorfema,
)


class MorfemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Morfema
        fields = "__all__"


class PalavraValidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PalavraValida
        fields = "__all__"


class PalavraMorfemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = PalavraMorfema
        fields = "__all__"


class TentativaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tentativa
        fields = "__all__"


class TentativaMorfemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TentativaMorfema
        fields = "__all__"