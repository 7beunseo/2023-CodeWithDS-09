from rest_framework import serializers
from .models import *

# 소통해요에 올라온 글 리스트
class PostListSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username')

    class Meta:
        model = Post
        fields = ['author','title','content','create_dt']

# 소통해요에 글 작성
class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title','content','image','url','where']
        extra_kwargs = {
            'image': {'required': False}  # 이미지 필드를 선택적으로 처리
        }

# 소통해요 글 상세보기를 누르면, 해당 게시물에 달린 댓글 리스트를 보여줌 


# 소통해요 글 상세보기 
class PostRetreiveSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source='author.username')
    class Meta:
        model=Post
        fields=['author','title','content','create_dt','image','url','where']


