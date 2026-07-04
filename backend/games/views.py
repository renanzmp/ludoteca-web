from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from .models import Game
from .serializers import GameSerializer, UserRegisterSerializer

# View responsável pelo registo de novos utilizadores
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny] # Rota pública
    serializer_class = UserRegisterSerializer

# ViewSet de jogos alterada para segurança
class GameViewSet(viewsets.ModelViewSet):
    serializer_class = GameSerializer
    permission_classes = [IsAuthenticated] # Exige o token JWT válido

    def get_queryset(self):
        # Filtra a base de dados para retornar apenas os registos do utilizador logado
        return Game.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        # Associa automaticamente o jogo criado ao utilizador autenticado
        serializer.save(user=self.request.user)