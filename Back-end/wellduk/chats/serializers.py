from rest_framework import serializers
from .models import Chat

class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = '__all__'
        
class ChatListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ['user_input']