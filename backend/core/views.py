from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework import status

from core.models import Morfema, PalavraValida, Tentativa
from core.serializers import (
    UsuarioSerializer,
    MorfemaSerializer,
    ValidarPalavraSerializer,
    RegistroSerializer,
)


class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UsuarioSerializer(request.user)
        return Response(serializer.data)


class RegistroView(CreateAPIView):
    serializer_class = RegistroSerializer
    permission_classes = [AllowAny]


class MorfemaListView(ListAPIView):
    queryset = Morfema.objects.all().order_by("tipo", "texto")
    serializer_class = MorfemaSerializer
    permission_classes = [IsAuthenticated]


class ValidarPalavraView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = ValidarPalavraSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        blocos = serializer.validated_data["blocos"]
        palavra = "".join(b["texto"] for b in blocos).lower()

        try:
            encontrada = PalavraValida.objects.get(texto=palavra)
            valida = True
            processo = encontrada.processo_morfologico
        except PalavraValida.DoesNotExist:
            valida = False
            processo = None

        Tentativa.objects.create(
            usuario=request.user,
            palavra=palavra,
            acertou=valida,
        )

        return Response({
            "valida": valida,
            "palavra": palavra,
            "processo_morfologico": processo,
        })