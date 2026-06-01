from rest_framework import viewsets

from .models import (
    Morfema,
    PalavraValida,
    PalavraMorfema,
    Tentativa,
    TentativaMorfema,
)

from .serializers import (
    MorfemaSerializer,
    PalavraValidaSerializer,
    PalavraMorfemaSerializer,
    TentativaSerializer,
    TentativaMorfemaSerializer,
)


class MorfemaViewSet(viewsets.ModelViewSet):
    queryset = Morfema.objects.all()
    serializer_class = MorfemaSerializer


class PalavraValidaViewSet(viewsets.ModelViewSet):
    queryset = PalavraValida.objects.all()
    serializer_class = PalavraValidaSerializer


class PalavraMorfemaViewSet(viewsets.ModelViewSet):
    queryset = PalavraMorfema.objects.all()
    serializer_class = PalavraMorfemaSerializer


class TentativaViewSet(viewsets.ModelViewSet):
    queryset = Tentativa.objects.all()
    serializer_class = TentativaSerializer


class TentativaMorfemaViewSet(viewsets.ModelViewSet):
    queryset = TentativaMorfema.objects.all()
    serializer_class = TentativaMorfemaSerializer