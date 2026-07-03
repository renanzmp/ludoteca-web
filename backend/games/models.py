from django.db import models

class Game(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    genre = models.CharField(max_length=100, verbose_name="Gênero")
    developer = models.CharField(max_length=150, verbose_name="Desenvolvedora")
    release_date = models.DateField(verbose_name="Data de Lançamento", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True) # Preenche automático na criação

    def __str__(self):
        return self.title