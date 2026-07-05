from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Game

class UserRegisterSerializer(serializers.ModelSerializer):
    # 'name' será o nome de exibição que pode se repetir
    name = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ['name', 'email', 'password']

    def validate_email(self, value):
        # Como o email será o nosso "username" interno, verificamos se já existe
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("Este e-mail já está cadastrado.")
        return value

    def create(self, validated_data):
        # Mapeamento inteligente:
        # 1. Colocamos o email no campo 'username' para o JWT aceitar no login
        # 2. Colocamos o nome repetível no campo 'first_name'
        user = User.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['name']
        )
        return user

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'title', 'genre', 'developer', 'created_at']