from django.db import models
from django.contrib.auth.models import User

class Game(models.Model):
    # Relaciona o jogo com um utilizador do sistema
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='games')
    title = models.CharField(max_length=200)
    genre = models.CharField(max_length=100)
    developer = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title