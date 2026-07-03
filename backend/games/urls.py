from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GameViewSet

# O roteador cria automaticamente as rotas para o CRUD
router = DefaultRouter()
router.register(r'games', GameViewSet)

urlpatterns = [
    path('', include(router.urls)),
]