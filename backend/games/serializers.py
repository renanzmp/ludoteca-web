from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Game

# Serializer para criação de novos utilizadores (Registo)
class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'email']

    def create(self, validated_data):
        # Utiliza o método nativo do Django para guardar a palavra-passe encriptada
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password']
        )
        return user

# Serializer para os Jogos
class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'title', 'genre', 'developer', 'created_at']