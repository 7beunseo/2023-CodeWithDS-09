from rest_framework import serializers
from .models import Chat

class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = '__all__'

    def get_queryset(self):
        # 요청을 보낸 사용자에 대한 queryset을 필터링하여 반환합니다.
        user = self.context['request'].user
        queryset = Chat.objects.filter(user=user)
        return queryset
        
class ChatListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ['user_input']



    