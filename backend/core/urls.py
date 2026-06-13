from django.urls import path
from core.views import MeView

urlpatterns = [
    path("auth/me/", MeView.as_view(), name="me"),
]