from django.db import models
from django.conf import settings

# Create your models here.
class Chat(models.Model):
    user_input = models.TextField()
    gpt_response = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    user=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name='gpt_auther' ,null=True)