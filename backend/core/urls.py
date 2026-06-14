from django.urls import path
from core.views import (
    MeView,
    RegistroView,
    MorfemaListView,
    ValidarPalavraView,
)

urlpatterns = [
    path("auth/me/", MeView.as_view(), name="me"),
    path("auth/registro/", RegistroView.as_view(), name="registro"),
    path("morfemas/", MorfemaListView.as_view(), name="morfemas"),
    path("validar-palavra/", ValidarPalavraView.as_view(), name="validar-palavra"),
]