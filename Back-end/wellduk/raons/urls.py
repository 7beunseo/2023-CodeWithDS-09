from django.urls import path
from .views import *
urlpatterns = [
    path('',UsingGenericAPIView.as_view()),
    path('current/',RaonGenericAPIView.as_view()),
    path('introduce/',RaonIntroductListAPIView.as_view() ),
]
