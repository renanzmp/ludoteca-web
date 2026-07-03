from rest_framework.test import APITestCase
from rest_framework import status
from .models import Game

class GameAPITest(APITestCase):
    def setUp(self):
        # O método setUp roda ANTES de cada teste. 
        # É ideal para popular nosso banco de dados temporário.
        self.game = Game.objects.create(
            title="The Witcher 3",
            genre="RPG",
            developer="CD Projekt Red"
        )
        self.url = '/api/games/'

    def test_listar_jogos(self):
        """Testa se o endpoint GET retorna a lista de jogos com sucesso"""
        # Fazemos a requisição GET na URL
        response = self.client.get(self.url)
        
        # Verificamos se o status HTTP é 200 (OK)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Verificamos se a API retornou 1 jogo (o que criamos no setUp)
        self.assertEqual(len(response.data), 1)
        # Verificamos se o título bate com o esperado
        self.assertEqual(response.data[0]['title'], "The Witcher 3")

    def test_criar_jogo(self):
        """Testa se o endpoint POST cadastra um novo jogo corretamente"""
        novo_jogo = {
            "title": "Hollow Knight",
            "genre": "Metroidvania",
            "developer": "Team Cherry"
        }
        
        # Fazemos a requisição POST enviando os dados
        response = self.client.post(self.url, novo_jogo)
        
        # Verificamos se o status HTTP é 201 (Created)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        # Verificamos se agora existem 2 jogos no banco de dados
        self.assertEqual(Game.objects.count(), 2)