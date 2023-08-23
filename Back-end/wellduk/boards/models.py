from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()

class Post(models.Model):
    id = models.AutoField(primary_key=True, null=False, blank=False)
    title = models.CharField(max_length=50, null=True)
    
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE, related_name="post")
    content = models.TextField()

    def __str__(self):
        return self.title

