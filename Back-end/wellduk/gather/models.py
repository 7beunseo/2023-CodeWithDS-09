from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Post(models.Model):
    title = models.CharField('TITLE', max_length=50)
    content = models.TextField('CONTENT')
    total = models.IntegerField('TOTAL', null=False) #모집인원
    now = models.IntegerField('NOW', default=0) #현재 신청인원
    create_dt = models.DateTimeField('CREATE DT', auto_now_add=True)
    update_dt = models.DateTimeField('UPDATE DT', auto_now=True)
    image=models.ImageField()
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name='g_post_author' ,null=True)
    
    class Meta:
        ordering = ('update_dt',)

    def __str__(self):
        return self.title

class Comment(models.Model):
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name='g_comment_author' ,null=True)
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

class Join(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,related_name='join_user',null=True) #신청인
    title = models.ForeignKey(Post,related_name='group', on_delete=models.CASCADE) #신청한 소모임
    apply = models.DateTimeField(auto_now_add=True) #신청일자
    phone = models.CharField(max_length=200, null=True) #연락처
