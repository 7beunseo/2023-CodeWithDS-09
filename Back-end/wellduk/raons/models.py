from django.db import models
from django.contrib.auth.models import User
# 유저와 연결 필요 
class Introduce(models.Model):
    machine = models.CharField(max_length=50)
    content=models.TextField()
    video=models.URLField()

class Check(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    use=models.BooleanField(default=False)
    # 처음 값, 끝 값 아무거나 설정 > use필드가 True로 바뀔 경우 초기화됨 
    start_time=models.DateTimeField(auto_now=True)
    end_time=models.DateTimeField(auto_now=True)
