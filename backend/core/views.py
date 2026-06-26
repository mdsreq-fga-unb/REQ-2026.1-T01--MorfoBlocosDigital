from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework import status

from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.mail import send_mail
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

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


class ForgotPasswordView(APIView):
    """Envia email com instruções para redefinir senha."""

    permission_classes = [AllowAny]

    def post(self, request):
        email = (request.data.get("email") or "").strip().lower()
        User = get_user_model()

        # Mensagem genérica para não revelar se o email existe.
        ok = True

        if email:
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                user = None

            if user is not None:
                token_generator = PasswordResetTokenGenerator()
                token = token_generator.make_token(user)
                uid = urlsafe_base64_encode(force_bytes(user.pk))

                # Link simples (não implementamos a página de reset ainda).
                # O importante aqui é "mandar o email".
                reset_url = f"{getattr(settings, 'FRONTEND_RESET_URL', 'http://localhost:5173/reset-senha')}?uid={uid}&token={token}"

                subject = "Recuperação de senha"
                message = (
                    "Olá!\n\n"
                    "Recebemos uma solicitação para redefinir sua senha.\n"
                    f"Clique no link para continuar: {reset_url}\n\n"
                    "Se você não solicitou isso, ignore este e-mail.\n"
                )

                send_mail(
                    subject=subject,
                    message=message,
                    from_email=getattr(settings, 'DEFAULT_FROM_EMAIL', None),
                    recipient_list=[user.email],
                    fail_silently=False,
                )

        return Response({"ok": ok, "detail": "Se o email existir, você receberá instruções."}, status=status.HTTP_200_OK)

