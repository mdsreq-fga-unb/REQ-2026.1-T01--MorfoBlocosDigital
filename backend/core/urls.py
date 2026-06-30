from django.urls import path
from core.views import (
    MeView,
    RegistroView,
    MorfemaListView,
    ValidarPalavraView,
    ForgotPasswordView,
    ResetPasswordConfirmView,
    HistoricoAlunoView,
    RelatorioProfessorView,
    TurmaListCreateView,
    AdicionarAlunoTurmaView,
)

urlpatterns = [
    path("auth/me/", MeView.as_view(), name="me"),
    path("auth/registro/", RegistroView.as_view(), name="registro"),
    path("auth/forgot-password/", ForgotPasswordView.as_view(), name="forgot-password"),
    path("auth/reset-password/", ResetPasswordConfirmView.as_view(), name="reset-password"),
    path("morfemas/", MorfemaListView.as_view(), name="morfemas"),
    path("validar-palavra/", ValidarPalavraView.as_view(), name="validar-palavra"),
    path("historico/", HistoricoAlunoView.as_view(), name="historico-aluno"),
    path("professor/relatorio/", RelatorioProfessorView.as_view(), name="relatorio-professor"),
    path("professor/turmas/", TurmaListCreateView.as_view(), name="turmas"),
    path("professor/turmas/<int:turma_id>/alunos/", AdicionarAlunoTurmaView.as_view(), name="turma-add-aluno"),
]

