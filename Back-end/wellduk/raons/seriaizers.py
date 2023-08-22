from .models import *
from rest_framework import serializers

class IntroduceSeriazlier(serializers.ModelSerializer):
    class Meta:
        model=Introduce
        fields='__all__'