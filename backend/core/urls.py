from django.urls import path
from core.views import (
    MeView,
    RegistroView,
    MorfemaListView,
    ValidarPalavraView,
    ForgotPasswordView,
    RelatorioProfessorView,
)

urlpatterns = [
    path("auth/me/", MeView.as_view(), name="me"),
    path("auth/registro/", RegistroView.as_view(), name="registro"),
    path("auth/forgot-password/", ForgotPasswordView.as_view(), name="forgot-password"),
    path("morfemas/", MorfemaListView.as_view(), name="morfemas"),
    path("validar-palavra/", ValidarPalavraView.as_view(), name="validar-palavra"),
    path("professor/relatorio/", RelatorioProfessorView.as_view(), name="relatorio-professor"),
]

