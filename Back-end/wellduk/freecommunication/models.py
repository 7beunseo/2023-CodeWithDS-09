from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Post(models.Model):
    title = models.CharField('TITLE', max_length=50)
    content = models.TextField('CONTENT')
    create_dt = models.DateTimeField('CREATE DT')
    update_dt = models.DateTimeField('UPDATE DT', auto_now=True)
    image=models.ImageField()
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name='post_author' ,null=True)

    class Meta:
        ordering = ('update_dt',)

    def __str__(self):
        return self.title

class Comment(models.Model):
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name='comment_author' ,null=True)
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField()
