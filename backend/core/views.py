from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework import status

from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.core.mail import send_mail
from django.db.models import Count
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

from core.models import Morfema, PalavraValida, Tentativa, Usuario
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
    # A paleta de blocos precisa SEMPRE do catálogo completo de morfemas.
    # Sem isto, a paginação global do DRF (PAGE_SIZE=10) corta a lista; como os
    # sufixos ficam por último na ordenação (prefixo < radical < sufixo), eles
    # desaparecem assim que o catálogo passa de 10 itens.
    pagination_class = None


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


class RelatorioProfessorView(APIView):
    """Relatório consolidado de desempenho para o professor (US24/US25).

    Agrega dados reais das Tentativas registradas. Visão geral (todos os
    alunos), pois o domínio ainda não modela turmas.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        # RN02: apenas professores podem acessar relatórios consolidados.
        if getattr(request.user, "tipo", None) != Usuario.PROFESSOR:
            return Response(
                {"detail": "Apenas professores podem acessar o relatório."},
                status=status.HTTP_403_FORBIDDEN,
            )

        tentativas = Tentativa.objects.all()
        total = tentativas.count()
        acertos = tentativas.filter(acertou=True).count()
        erros = total - acertos
        taxa_acerto = round((acertos / total) * 100) if total else 0

        # US25 — palavras inválidas mais submetidas, em ranking decrescente.
        palavras_mais_erradas = list(
            tentativas.filter(acertou=False)
            .values("palavra")
            .annotate(ocorrencias=Count("id"))
            .order_by("-ocorrencias", "palavra")[:10]
        )

        # US24 — desempenho individual de cada aluno.
        alunos = Usuario.objects.filter(tipo=Usuario.ALUNO).order_by(
            "first_name", "username"
        )
        por_aluno = []
        for aluno in alunos:
            do_aluno = tentativas.filter(usuario=aluno)
            a_total = do_aluno.count()
            a_acertos = do_aluno.filter(acertou=True).count()
            a_pct = round((a_acertos / a_total) * 100) if a_total else 0
            por_aluno.append(
                {
                    "id": aluno.id,
                    "nome": aluno.first_name or aluno.username,
                    "email": aluno.email,
                    "respondidas": a_total,
                    "acertos": a_acertos,
                    "aproveitamento": a_pct,
                }
            )

        return Response(
            {
                "total_alunos": alunos.count(),
                "total_tentativas": total,
                "acertos": acertos,
                "erros": erros,
                "taxa_acerto": taxa_acerto,
                "palavras_mais_erradas": palavras_mais_erradas,
                "alunos": por_aluno,
            }
        )


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

