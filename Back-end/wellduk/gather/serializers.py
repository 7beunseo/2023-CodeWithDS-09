from rest_framework import serializers
from .models import *

# 같이해요에 올라온 글 리스트
class PostListSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username')

    class Meta:
        model = Post
        fields = ['author','title','content','create_dt','url']

# 같이해요에 글 작성
class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title','content','image','url']
        extra_kwargs = {
            'image': {'required': False}  # 이미지 필드를 선택적으로 처리
        }


# 같이해요 글 상세보기 
class PostRetreiveSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username')
    class Meta:
        model=Post
        fields=['author','title','content','create_dt','image']


