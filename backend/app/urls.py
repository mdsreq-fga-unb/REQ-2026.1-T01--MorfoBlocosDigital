from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from quickstart import views

router = routers.DefaultRouter()
router.register(r"users", views.UserViewSet)
router.register(r"groups", views.GroupViewSet)
router.register(r"books", views.BookViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    # Rotas padrão do router (sem api/ aqui conforme o seu original)
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    
    # Rotas de Autenticação com prefixo api/
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    
    # Rotas do app 'core' com prefixo api/
    path("api/", include("core.urls")),
]