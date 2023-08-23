from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, GenericAPIView, ListCreateAPIView
from rest_framework.response import Response
from rest_framework import status
from .permissions import CustomReadOnly
from rest_framework.viewsets import ModelViewSet
from datetime import datetime
from rest_framework.permissions import IsAuthenticated

# 소통해요 글 리스트 보기, 소통해요 글 생성하기, 글 상세보기, 수정하기, 삭제하기
class PostModelViewSet(ModelViewSet):
    queryset=Post.objects.all()
    permission_classes=[CustomReadOnly]

    # 시리얼라이저 선택
    def get_serializer_class(self):
        # get 요청일 경우 (리스트를 조회하는 우)
        if self.action=='list':
            return PostListSerializer
        elif self.action=='retrieve':
            return PostRetreiveSerializer
        else:
            return PostCreateSerializer
        
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # author 필드를 유효성 검사 이후 따로 넣어줘야 함 
        serializer.validated_data['author'] = request.user

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    # 전체 경로 말고, 이미지 경로만 나오도록 
    def get_serializer_context(self):
        return {
            'request': None,
            'format': self.format_kwarg,
            'view': self
        }
    
