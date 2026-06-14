from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView
from rest_framework import status

from core.models import Morfema, PalavraValida
from core.serializers import (
    UsuarioSerializer,
    MorfemaSerializer,
    ValidarPalavraSerializer,
)


class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UsuarioSerializer(request.user)
        return Response(serializer.data)


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
            return Response({
                "valida": True,
                "palavra": palavra,
                "processo_morfologico": encontrada.processo_morfologico,
            })
        except PalavraValida.DoesNotExist:
            return Response({
                "valida": False,
                "palavra": palavra,
                "processo_morfologico": None,
            })