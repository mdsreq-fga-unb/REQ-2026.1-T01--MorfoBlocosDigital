from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from quickstart.views import (
    MorfemaViewSet,
    PalavraValidaViewSet,
    PalavraMorfemaViewSet,
    TentativaViewSet,
    TentativaMorfemaViewSet,
)

router = routers.DefaultRouter()

router.register(r"morfemas", MorfemaViewSet)
router.register(r"palavras", PalavraValidaViewSet)
router.register(r"palavra-morfemas", PalavraMorfemaViewSet)
router.register(r"tentativas", TentativaViewSet)
router.register(r"tentativa-morfemas", TentativaMorfemaViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(router.urls)),
]